import express from 'express';
import validator from 'express-validation';
import {VALIDATION_ADD_NEWS,
    VALIDATION_GETLIST_NEWS,
    VALIDATION_UPDATE_NEWS,
    VALIDATION_DELETE_NEWS} from './ValidationNews';
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
router.post("/getlist",validator(VALIDATION_GETLIST_NEWS),
    async(req,res)=>{
        try {
            let listnews = await ModelNews.getList(req.body);
            console.log(listnews+'phong');
            return responsHelper(req,res,null,listnews);
        } catch (error) {
            return responsHelper(req,res,null,error);
        }
})
router.get("/detial/:idnews",async(req,res)=>{
    try {
        let detialNews = await ModelNews.getDetialNews(req.body.id);
        return responsHelper(req,res,null,detialNews);
    } catch (error) {
        return responsHelper(req,res,null,error);
    }
})
router.post("/update",validator(VALIDATION_UPDATE_NEWS),
    async(req,res)=>{
        try {
            let {id,...data}= req.body ;
            console.log(id,data);
            let resultUpdate = await ModelNews.updateNews(data,id);
            return responsHelper(req,res,null,resultUpdate);
        } catch (error) {
            return responsHelper(req,res,null,error);
        }
    })
router.post("/delete",validator(VALIDATION_DELETE_NEWS),
    async(req,res)=>{
        try {
            let resultDelete = await ModelNews.deleteNews(req.body.id);
            return responsHelper(req,res,null,resultDelete);
        } catch (error) {
            return responsHelper(req,res,null,error);
        }
    })
export default router ;