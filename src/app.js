import express from "express";
import productRouter from "./routes/product";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// Tạo file vite.config.js ở root -> clone github của thầy
// truy cập file app.js thêm cuối file -> export const viteNodeApp = app;
// Truy cập file package.json, sửa lại script -> npm run dev
