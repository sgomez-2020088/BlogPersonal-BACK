//VALIDACIONES EN RELACIÓN A LA DB


import {isValidObjectId} from 'mongoose'


export const objectIdValid = async (objectId)=>{
    if(!isValidObjectId(objectId)){
        throw new Error('Keeper is not objectId')
    }
}
