import {Router} from 'express'
import { addPost, deletePost, getAllPost } from '../post/post.controller.js'
import {addPostValidator, updatePostValidator} from '../../helpers/validators.js'

const api = Router();

//Ruta pública
api.get('/getAllPosts', getAllPost)

//Rutas privadas
api.post('/addPost', [addPostValidator], addPost)
api.delete('/deletePost', deletePost)

export default api