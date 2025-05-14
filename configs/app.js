'use strict'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
//import {initializeDatabase} from './initSetup.js'
import { limiter } from '../middlewares/rate.limit.js'
import postRoutes from '../src/post/post.routes.js'
import commentRoutes from '../src/comment/comment.routes.js'

const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(limiter)
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/post', postRoutes)
    app.use('/v1', commentRoutes)
}

export const initServer = async()=>{
    const app = express()
    try {
        configs(app)
        routes(app)

     
        app.listen(process.env.PORT)
        console.log(`Server runnig in port ${process.env.PORT}`)
    } catch (error) {
        console.log('Server Init Failed', error)
    }
}