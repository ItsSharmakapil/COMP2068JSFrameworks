



// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Assuming you have a Student model

// READ operation - Fetch all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find(); // Retrieve all students from the database
    res.render('students/index', { students }); // Render view with students data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE operation - Add a new student
router.post('/', async (req, res) => {
  const student = new Student({
    // Construct a new student object based on request body
    StudentNumber: req.body.StudentNumber,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress
  });
  try {
    const newStudent = await student.save(); // Save the new student to the database
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Implement other CRUD handlers (UPDATE and DELETE) similarly

module.exports = router;
