import Joi from 'joi';
import {userFiels} from './../../models/users';
export  const VALIDATION_USER_LOGIN = {
    options: {allowUnknownBody: false},
    body:{
        [userFiels.username]:Joi.string().required(),
        [userFiels.password]:Joi.string().required()
    }
}
