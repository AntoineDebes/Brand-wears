import express from "express";
import { getProducts, addProducts } from "../controllers/product.js";
import { checkUser } from "../middleware/authMiddleware.js";
import multer from "multer";

const productRouter = express.Router();

let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage : storage})


productRouter.get("*", checkUser);

productRouter.get("/", getProducts);

productRouter.post("/create", upload.single("productImage") ,addProducts);

export default productRouter;
