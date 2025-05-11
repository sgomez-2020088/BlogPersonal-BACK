//Validar campos en las rutas
import {body} from 'express-validator'
import {validateErrorWithoutImg} from './validate.error.js'
import { existCourse } from './db.validators.js'

export const addCourseValidator = [
    body('name', 'Name is required').notEmpty().isLength({max : 50}).custom(existCourse),
    body('description', 'Description is required').notEmpty().isLength({max : 100}),
    validateErrorWithoutImg
]

export const updateCourseValidation = [
    body('id', 'Id is required').notEmpty(),
    body('name', 'Name is required').optional().notEmpty().isLength({max : 50}).custom(existCourse),
    body('description', 'Description is required').optional().notEmpty().isLength({max : 100}),
    validateErrorWithoutImg
]

export const addPostValidator = [
    body('title', 'Title is required').notEmpty().isLength({max : 100}),
    body('course', 'Course is required').notEmpty(),
    body('description', 'Description is required').notEmpty(),
    body('link', 'Link is required').notEmpty(),
    validateErrorWithoutImg
]

export const updatePostValidator = [
    body('title', 'Title is required').optional().notEmpty().isLength({max : 100}),
    body('category', 'Category is required').optional().notEmpty(),
    body('content', 'Content is required').optional().notEmpty(),
    validateErrorWithoutImg
]

export const addCommentaryValidator = [
    body('content', 'Content is required').notEmpty().isLength({max : 500}),
    body('post', 'Post is required').notEmpty(),
    validateErrorWithoutImg
]

export const updateCommentaryValidator = [
    body('content', 'Content is required').optional().notEmpty().isLength({max : 500}),
    body('post', 'Post is required').optional().notEmpty(),
    validateErrorWithoutImg
]