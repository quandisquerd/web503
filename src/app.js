import express from "express";
import productRouter from "./routes/product";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", productRouter);

app.listen(process.env.PORT, function () {
    console.log(`Server running on port ${process.env.PORT}`);
});

// -> workspace
// -> collection ( thư mục chứa)
// -> request
