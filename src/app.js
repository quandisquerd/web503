import express from "express";
import productRouter from "./routes/product";

const app = express();

app.use(express.json());

app.use("/api", productRouter);

export const viteNodeApp = app;

// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev
