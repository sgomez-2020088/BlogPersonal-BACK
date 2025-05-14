//Validar campos en las rutas
import {body} from 'express-validator'
import {validateErrorWithoutImg} from './validate.error.js'


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