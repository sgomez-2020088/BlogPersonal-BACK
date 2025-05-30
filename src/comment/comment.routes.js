import {Router} from 'express';
import {addCommentary,deleteCommentary, getCommentsByPostId} from './comment.controller.js'
import {addCommentaryValidator, updateCommentaryValidator} from '../../helpers/validators.js'

const api = Router()

api.post('/post/:postId/comments', addCommentary)
api.delete('/deleteCommentary', deleteCommentary)
api.get('/post/:postId/comments', getCommentsByPostId)

export default api