const createCourse = (req, res) => {
    res.status(200).json({ message: 'create new couses' })
}
const getCourses = (req, res) => {
    res.status(200).json({ message: 'get our couses' })
}
const updateCourses = (req, res) => {
    res.status(200).json({ message: 'update course' })
}
const deleteCourses = (req, res) => {
    res.status(200).json({ message: 'delete course' })
}