//Validar los errores 
import { validationResult } from "express-validator"

export const validateErrors = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //return res.status(400).send(errors.array());
        return next(errors);
    }
    next()
}

export const validateErrorWithoutImg = (req, res, next)=>{
    const errors = validationResult(req)
   
    if (!errors.isEmpty()){
        return res.status(400).send(
            {
                success: false,
                message: 'Validation errors',
                errors: errors.errors
            }
        )
    }
    next()
}