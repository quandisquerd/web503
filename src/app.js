import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product";
dotenv.config();

// khởi tạo
const app = express();

app.use(express.json());

app.use("/api", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export const viteNodeApp = app;
