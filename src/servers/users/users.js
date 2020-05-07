import express from 'express';
import UsersModel from './modelUser';
const router = express.Router();
import {responsHelper} from './../../commons/responsiveHelper';
import validator from 'express-validation';
import {VALIDATION_USER_LOGIN} from './validationUsers';
router.post("/login",validator(VALIDATION_USER_LOGIN),
    async(req,res)=>{
        try {
            let result = await UsersModel.checkLogin(req.body);
            return responsHelper(req,res,null,result);
        } catch (error) {
            console.log(error);
            return responsHelper(req,res,error,null);
        }
    })
export default router;