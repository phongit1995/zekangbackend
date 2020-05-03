import Joi from 'joi' ;
import {productsFiels} from './../../models/products';
export const VALIDATION_GETLIST_PRODUCT = {
    options: {allowUnknownBody: false},
    body:{
        page:Joi.number().required(),
        numberitem:Joi.number()
    }
}
export const VALIDATION_ADD_PRODUCT = {
    options: {allowUnknownBody: false},
    body:{
       [productsFiels.name]:Joi.string().required(),
       [productsFiels.price]:Joi.number().required(),
       [productsFiels.start]:Joi.number(),
       [productsFiels.descriptions]:Joi.string(),
       [productsFiels.images]:Joi.array().items(Joi.string()),
       [productsFiels.ingredients]:Joi.string(),
       [productsFiels.usage]:Joi.string(),
       [productsFiels.heed]:Joi.string(),
       [productsFiels.expirydate]:Joi.string(),
       [productsFiels.evaluation]:Joi.string()
    }
}