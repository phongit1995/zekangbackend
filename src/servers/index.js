import express from 'express';
import upload from './upload/upload';
import product from './products/products';
import news from './news/News';
const router = express.Router();
router.use("/upload",upload);
router.use("/product",product);
router.use("/news",news);
export default router ;