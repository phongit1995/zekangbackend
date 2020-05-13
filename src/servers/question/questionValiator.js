import Joi from 'joi' ;
export const VALIDATION_SEND_QUESTION = {
    options: {allowUnknownBody: false},
    body:{
        name:Joi.string().required(),
        phone:Joi.string().required(),
        email:Joi.string().required(),
        content:Joi.string().required()
    }
}