import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

// Trả về danh sách
app.get("/api/products", async function (req, res) {
    const { data } = await axios.get("http://localhost:3002/products");
    res.json(data);
});

// Trả về 1 phần tử
app.get("/api/products/:id", async function (req, res) {
    const { data } = await axios.get(`http//localhost:3002/products/${req.params.id}`);
    res.json(data);
});

// Thêm
app.post("/api/products", async (req, res) => {
    const body = req.body;
    const { data } = await axios.post("http://localhost:3002/products", body);
    res.json({
        message: "Thêm sản phẩm thành công",
        data,
    });
});

// Xóa sản phẩm
app.delete("/api/products/:id", async (req, res) => {
    await axios.delete(`http://localhost:3002/products/${req.params.id}`);
    res.json({ message: "Xóa thành công" });
});

// Cập nhật sản phẩm
app.put("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const { data } = await axios.put(`http://localhost:3002/products/${id}`, body);
    res.json({
        message: "Cập nhật thành công",
        data,
    });
});

app.listen(8080, function () {
    console.log("Server is running port 8080");
});
