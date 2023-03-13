import express from "express";
import productRouter from "./routes/product";

const app = express();

app.use("/api", productRouter);

app.use(express.json());

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// tạo file vite.config.js
