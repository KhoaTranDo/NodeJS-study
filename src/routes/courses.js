const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
//Link con tren link cha


router.get('/:slug', courseController.show);

module.exports = router;
