const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  discussion: { type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null }
}, { timestamps: true });
module.exports = mongoose.model('Comment', CommentSchema);
