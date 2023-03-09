import express from "express";

const app = express();
app.use(express.json());
// LIST
app.get("/api/products", async function (req, res) {
    const response = await fetch("https://63f5d86059c944921f67a58c.mockapi.io/products");
    const products = await response.json();
    res.json(products);
});
// SIGNLE
app.get("/api/products/:id", async function (req, res) {
    const id = req.params.id;
    const response = await fetch(`https://63f5d86059c944921f67a58c.mockapi.io/products/${id}`);
    const product = await response.json();
    res.json({
        message: "Detail product",
        data: product,
    });
});
// ADD
app.post("/api/products", async function (req, res) {
    const body = req.body;

    const response = await fetch("https://63f5d86059c944921f67a58c.mockapi.io/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const product = await response.json();

    res.json({
        message: "Thêm sản phẩm thành công",
        data: product,
    });
});
// UPDATE
app.put("/api/products/:id", async function (req, res) {
    const id = req.params.id;
    const body = req.body;

    const response = await fetch(`https://63f5d86059c944921f67a58c.mockapi.io/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const product = await response.json();

    res.json({
        message: "Cập nhật sản phẩm thành công",
        data: product,
    });
});
// DELETE
app.delete("/api/products/:id", async function (req, res) {
    const id = req.params.id;

    const response = await fetch(`https://63f5d86059c944921f67a58c.mockapi.io/products/${id}`, {
        method: "DELETE",
    });
    const product = await response.json();

    res.json({
        message: "Xóa sản phẩm thành công",
        data: product,
    });
});

app.listen(8080, function () {
    console.log("Server running on port 8080");
});
