import express from 'express';
import validator from 'express-validation';
import {VALIDATION_GETLIST_PRODUCT ,VALIDATION_ADD_PRODUCT} from './validatorProducts';
import ProductModel from './modelProducts';
import {responsHelper} from './../../commons/responsiveHelper';
const router = express.Router();
router.get("/",async(req,res)=>{
    let datacreate = await productsDb.create({id:1243,name:"phongnguyen"});
    res.send(JSON.stringify(datacreate));
})
router.post("/add", validator(VALIDATION_ADD_PRODUCT),async(req,res)=>{
    try {
        let resultAdd = await ProductModel.addProduct(req.body);
        return responsHelper(req,res,null,resultAdd);
    } catch (error) {
        return responsHelper(req,res,error);
    }
})
router.post("/getlist", validator(VALIDATION_GETLIST_PRODUCT),async(req,res)=>{
    try {
        let resultGet = await ProductModel.getListProduct(req.body);
        return responsHelper(req,res,null,resultGet);
    } catch (error) {
        return responsHelper(req,res,error);
    }
})
router.get("/detial/:id",async(req,res)=>{
    try {
        let productDetial = await ProductModel.getDetialProduct(req.params.id);
        return responsHelper(req,res,null,productDetial);
    } catch (error) {
        return responsHelper(req,res,error);
    }
})
export default router ;