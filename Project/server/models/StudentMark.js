// server/models/StudentMark.js
const mongoose = require('mongoose');

const studentMarkSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  category: { type: String, required: true },
  marks: { type: Number, required: true },
});

module.exports = mongoose.model('StudentMark', studentMarkSchema);
