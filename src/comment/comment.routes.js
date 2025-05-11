import {Router} from 'express';
import {addCommentary, updateCommentary,deleteCommentary} from './comment.controller.js'
import {addCommentaryValidator, updateCommentaryValidator} from '../../helpers/validators.js'

const api = Router()

api.post('/addCommentary', [addCommentaryValidator], addCommentary)
api.put('/updateCommentary', [updateCommentaryValidator],  updateCommentary)
api.delete('/deleteCommentary', deleteCommentary)

export default api