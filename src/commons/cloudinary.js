require("dotenv").config();
import cloudinary from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUND_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
export const uploadCloudinary = (file)=>{
    return new Promise((reslove,reject)=>{
        cloudinary.v2.uploader.upload(file, {
            use_filename :true, 
            unique_filename : false,
            folder:"zekang"
        },(error,result)=>{
            // console.log(result);
            if(!error){
                reslove({
                    url:result.secure_url,
                    original_filename:result.original_filename
                });
            }
            else{
                reject(error);
            }
        })
    })
}