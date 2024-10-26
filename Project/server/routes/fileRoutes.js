const express = require('express'); // Make sure you have this line
const multer = require('multer');
const xlsx = require('xlsx');
const StudentMark = require('../models/StudentMark');

const router = express.Router(); // Ensure this line is present


const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post('/upload/:category', upload.single('file'), async (req, res) => {
  try {
    const { category } = req.params;
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const records = data.map((row) => ({
      studentId: row.StudentID,
      category,
      marks: row.Marks,
    }));

    await StudentMark.insertMany(records);
    res.status(200).json({ message: 'File uploaded and data saved' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Failed to upload file' });
  }
});

module.exports = router; 
