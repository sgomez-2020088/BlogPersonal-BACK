//VALIDACIONES EN RELACIÓN A LA DB

import Course from '../src/course/course.model.js'
import {isValidObjectId} from 'mongoose'


export const existCourse = async(name)=>{
    const alreadyExist = await Course.findOne({name})
    if(alreadyExist){
        console.error(`Course ${name} already exist`)
        throw new Error(`Course ${name} already exist`)
    }
}

export const objectIdValid = async (objectId)=>{
    if(!isValidObjectId(objectId)){
        throw new Error('Keeper is not objectId')
    }
}
