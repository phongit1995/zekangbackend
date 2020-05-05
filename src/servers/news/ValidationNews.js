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