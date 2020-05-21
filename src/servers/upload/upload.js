
require("dotenv").config();
import express, { request } from 'express';
import multer from 'multer';
import {uploadCloudinary} from './../../commons/cloudinary';
import {responsHelper} from './../../commons/responsiveHelper';
import path from 'path';
import fs from 'fs';
const router = express.Router();
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../../../uploads');
    },
    filename: function (req, file, cb) {
        var nameFile = new Date().getTime() + '-' + file.originalname;
        cb(null, nameFile);
    }
});
let upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 20}
});
router.post("/",
    upload.single("file"),
    async (req,res)=>{
        try {
            let dataUpload = await uploadCloudinary(req.file.path);
            if(process.env.DEV=="production"){
                dataUpload.url= process.env.WEBSITE + req.file.filename ;
            }
            return responsHelper(req,res,null,{...dataUpload,filename:req.file.filename});
        } catch (error) {
            return responsHelper(req,res,error);
        }
        
    })
router.get("/:filename",(req,res)=>{
    if(fs.existsSync(path.join(__dirname,'/../../../uploads',req.params.filename))){
        let stream = fs.createReadStream(path.join(__dirname,'/../../../uploads',req.params.filename))
        stream.pipe(res);
    }
    else{
        res.send("Not found")
    }
})
export default router ;