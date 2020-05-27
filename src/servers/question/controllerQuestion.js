import express from 'express';
import validator from 'express-validation';
import {responsHelper} from './../../commons/responsiveHelper';
import {sendQuestion,sendEmail} from './../../commons/sendmail';
import {VALIDATION_SEND_QUESTION,VAIDATION_SEND_CONTACT} from './questionValiator';
const router = express.Router();
router.post("/send", validator(VALIDATION_SEND_QUESTION),async(req,res)=>{
    try {
        let dataSend = await sendQuestion(req.body);
        return responsHelper(req,res,null,dataSend);
    } catch (error) {
        console.log(error);
    }
})
router.post("/contact", validator(VAIDATION_SEND_CONTACT),async(req,res)=>{
    try {
        let dataSend = await sendEmail(req.body);
        return responsHelper(req,res,null,dataSend);
    } catch (error) {
        console.log(error);
    }
})
export default router ;