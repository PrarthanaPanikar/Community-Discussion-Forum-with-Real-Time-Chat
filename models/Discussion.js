const mongoose = require('mongoose');
const DiscussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  score: { type: Number, default: 0 }
}, { timestamps: true });
module.exports = mongoose.model('Discussion', DiscussionSchema);
