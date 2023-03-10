import express from "express";
import productRouter from "./routes/product";

const app = express();
app.use(express.json());
app.use("/api", productRouter);

app.listen(8080, function () {
    console.log("Server is running port 8080");
});
