const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const { setupSockets } = require('./sockets');
const authRoutes = require('./routes/auth');
const discussionRoutes = require('./routes/discussions');
const commentRoutes = require('./routes/comments');

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/comments', commentRoutes);

app.get('/api/health', (req, res) => res.json({ ok: true }));

const server = http.createServer(app);
const io = setupSockets(server); // initialize socket.io

const PORT = process.env.SERVER_PORT || 5000;
async function start(){
  await mongoose.connect(process.env.MONGO_URI, { });
  server.listen(PORT, ()=> console.log('Server listening', PORT));
}
start().catch(err=>{ console.error(err); process.exit(1); });
