const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  room: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: { type: String, required: true }
}, { timestamps: true });
module.exports = mongoose.model('Message', MessageSchema);
