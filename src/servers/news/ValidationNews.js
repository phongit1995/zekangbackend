import Joi from 'joi' ;
import {newsFiels} from './../../models/news';
export const VALIDATION_ADD_NEWS = {
    options: {allowUnknownBody: false},
    body:{
        [newsFiels.title]:Joi.string().required(),
        [newsFiels.description]:Joi.string(),
        [newsFiels.image]:Joi.string(),
        [newsFiels.html]:Joi.string()
    }
}
export const VALIDATION_GETLIST_NEWS= {
    options: {allowUnknownBody: false},
    body:{
        page:Joi.number().required(),
        numberitem:Joi.number()
    }
}
export const VALIDATION_UPDATE_NEWS = {
    options: {allowUnknownBody: false},
    body:{
        [newsFiels.id]:Joi.number().required(),
        [newsFiels.title]:Joi.string(),
        [newsFiels.description]:Joi.string(),
        [newsFiels.image]:Joi.string(),
        [newsFiels.html]:Joi.string()
    }
}
export const VALIDATION_DELETE_NEWS = {
    options: {allowUnknownBody: false},
    body:{
        [newsFiels.id]:Joi.number().required()
    }
}