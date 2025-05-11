import {Router} from 'express'
import { addCourse, allCourses, updateCourse, deleteCourse } from './course.controller.js'
import {addCourseValidator, updateCourseValidation} from '../../helpers/validators.js'

const api = Router()


api.post('/addCourse', [addCourseValidator], addCourse)
api.get('/allCourses', allCourses) 
api.put('/updateCourse', [updateCourseValidation ], updateCourse) 
api.delete('/deleteCourse', deleteCourse)

export default api