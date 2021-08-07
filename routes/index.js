import { Router } from "express";
import productRouter from "./product.js";
import userRouter from "./user.js";
// import uploadRouter from "./upload.js";

const appRoutes = Router();

appRoutes.use("/product", productRouter);
appRoutes.use("/user", userRouter);
// appRoutes.use("/image", uploadRouter);

export default appRoutes;
