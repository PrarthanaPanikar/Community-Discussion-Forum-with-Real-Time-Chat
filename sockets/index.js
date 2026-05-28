const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const Message = require('../models/Message');
const User = require('../models/User');

function setupSockets(server){
  const io = new Server(server, { cors: { origin: '*' } });
  io.use(async (socket, next) => {
    const token = socket.handshake.auth?.token;
    if(!token) return next(new Error('auth error'));
    try{
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = payload.sub;
      socket.user = await User.findById(payload.sub).select('-password');
      next();
    }catch(err){
      next(new Error('auth error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('socket connected', socket.userId);

    socket.on('room:join', (room) => {
      socket.join(room);
      io.to(room).emit('presence', { userId: socket.userId, action: 'join' });
    });

    socket.on('room:leave', (room) => {
      socket.leave(room);
      io.to(room).emit('presence', { userId: socket.userId, action: 'leave' });
    });

    socket.on('message:send', async ({ room, text }) => {
      if(!text || !room) return;
      const msg = await Message.create({ room, author: socket.userId, text });
      const out = await msg.populate('author', 'name');
      io.to(room).emit('message:new', out);
    });

    socket.on('typing', ({ room, isTyping }) => {
      socket.to(room).emit('typing', { userId: socket.userId, isTyping });
    });

    socket.on('disconnect', ()=> {
      // optional: broadcast offline presence
    });
  });

  return io;
}
module.exports = { setupSockets };
