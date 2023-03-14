import express from "express";
import productRouter from "./routes/product";

const app = express();

// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());

// router
app.use(productRouter);

export const viteNodeApp = app;
