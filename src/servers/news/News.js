import express from 'express';
import validator from 'express-validation';
import {VALIDATION_ADD_NEWS} from './ValidationNews';
import {responsHelper} from './../../commons/responsiveHelper';
import ModelNews from './ModelNews' ;
const router = express.Router();
router.post("/add",validator(VALIDATION_ADD_NEWS),
    async(req,res)=>{
        try {
            let resultAdd = await ModelNews.addNews(req.body);
            return responsHelper(req,res,null,resultAdd);
        } catch (error) {
            return responsHelper(req,res,null,error);
        }
    })
export default router ;