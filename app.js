import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// LIST
app.get("/api/products", async function (req, res) {
    const { data: products } = await axios.get(
        "https://63f5d86059c944921f67a58c.mockapi.io/products"
    );
    res.json(products);
});
// SIGNLE
app.get("/api/products/:id", async function (req, res) {
    const { data: product } = await axios.get(
        `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`
    );
    res.json({
        message: "Detail product",
        data: product,
    });
});
// ADD
app.post("/api/products", async function (req, res) {
    const { data: product } = await axios.post(
        "https://63f5d86059c944921f67a58c.mockapi.io/products",
        req.body
    );
    res.json({
        message: "Thêm sản phẩm thành công",
        data: product,
    });
});
// UPDATE
app.put("/api/products/:id", async function (req, res) {
    const { data: product } = await axios.put(
        `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`,
        req.body
    );
    res.json({
        message: "Cập nhật sản phẩm thành công",
        data: product,
    });
});
// DELETE
app.delete("/api/products/:id", async function (req, res) {
    const { data: product } = await axios.delete(
        `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`
    );
    res.json({
        message: "Xóa sản phẩm thành công",
        data: product,
    });
});

app.listen(8080, function () {
    console.log("Server running on port 8080");
});

// -> workspace
// -> collection ( thư mục chứa)
// -> request
