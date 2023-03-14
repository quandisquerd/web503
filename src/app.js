import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";

const app = express();

// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());

// router
app.use("/api", productRouter);
app.use("/api", authRouter);

export const viteNodeApp = app;
