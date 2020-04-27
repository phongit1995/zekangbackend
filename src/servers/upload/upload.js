import express from 'express';
import multer from 'multer';
import {uploadCloudinary} from './../../commons/cloudinary';
import {responsHelper} from './../../commons/responsiveHelper';
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
            return responsHelper(req,res,null,{...dataUpload,filename:req.file.filename});
        } catch (error) {
            return responsHelper(req,res,error);
        }
        
    })
export default router ;