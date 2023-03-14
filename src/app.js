import express from "express";
import productRouter from "./routes/product";
import dotenv from "dotenv";

// config
dotenv.config();
const app = express();

// middleware
app.use(express.json());

//router
app.use("/api", productRouter);

export const viteNodeApp = app;
// -> workspace
// -> collection ( thư mục chứa)
// -> request

// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.(.js|.ts) trong thư mục gốc. Copy code từ github của thầy
// B3: Trong file app.js, thêm đoạn code sau:
//     export const viteNodeApp = app;
// B4: trong file package.json, thay đổi đoạn code sau
//      "dev": "concurrently \"vite\" \"json-server --watch db.json --port 3002\""
// B5: npm run dev
