const express = require('express')
const router = express.Router()
const { getCourses } = require-parser('./../controllers/coursesController')

router.get('/', getCourses)

module.exports = router