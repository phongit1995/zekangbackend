import express from 'express';
import upload from './upload/upload';
import product from './products/products';
const router = express.Router();
router.use("/upload",upload);
router.use("/product",product);
export default router ;