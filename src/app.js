import express from "express";
import productRouter from "./routes/product";

const app = express();

// middleware
app.use(express.json());

// router
app.use("/api", productRouter);

app.listen(8080, function () {
    console.log("Server is running port 8080");
});

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// Tạo file vite.config.js ở root -> clone github của thầy
// truy cập file app.js thêm cuối file -> export const viteNodeApp = app;
// Truy cập file package.json, sửa lại script -> npm run dev
