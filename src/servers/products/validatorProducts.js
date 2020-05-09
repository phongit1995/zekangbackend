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
       [productsFiels.descriptions]:Joi.string().allow(null, ''),
       [productsFiels.images]:Joi.array().items(Joi.string()),
       [productsFiels.ingredients]:Joi.string().allow(null, ''),
       [productsFiels.usage]:Joi.string().allow(null, ''),
       [productsFiels.heed]:Joi.string().allow(null, ''),
       [productsFiels.expirydate]:Joi.string().allow(null, ''),
       [productsFiels.evaluation]:Joi.string().allow(null, '')
    }
}
export const VALIDATION_UPDATE_PRODUCT = {
    options: {allowUnknownBody: false},
    body:{
        [productsFiels.id]:Joi.string().required(),
       [productsFiels.name]:Joi.string().required(),
       [productsFiels.price]:Joi.number().required(),
       [productsFiels.start]:Joi.number(),
       [productsFiels.descriptions]:Joi.string().allow(null, ''),
       [productsFiels.images]:Joi.array().items(Joi.string()),
       [productsFiels.ingredients]:Joi.string().allow(null, ''),
       [productsFiels.usage]:Joi.string().allow(null, ''),
       [productsFiels.heed]:Joi.string().allow(null, ''),
       [productsFiels.expirydate]:Joi.string().allow(null, ''),
       [productsFiels.evaluation]:Joi.string().allow(null, '')
    }
}
export const VALIDATION_DELETE_PRODUCT = {
    options: {allowUnknownBody: false},
    body:{
        [productsFiels.id]:Joi.string().required()
    }
}