import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  username: { type: String, default: 'Anonymous' },
  room: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() }
}, { timestamps: false });

export default mongoose.model('Message', messageSchema);