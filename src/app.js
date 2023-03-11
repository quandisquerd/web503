import express from "express";
import productRouter from "./routes/product.js";

const app = express();
app.use(express.json());

app.use("/api", productRouter);

app.listen(8080, function () {
    console.log("Server running on port 8080");
});

// -> workspace
// -> collection ( thư mục chứa)
// -> request
