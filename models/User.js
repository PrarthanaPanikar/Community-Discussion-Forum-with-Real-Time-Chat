const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: { type: String },
  role: { type: String, default: 'member' }
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
