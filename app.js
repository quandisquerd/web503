import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

// Trả về danh sách
app.get("/api/products", async (req, res) => {
    const { data } = await axios.get("http://localhost:3002/products");
    return res.json(data);
});
// Trả về một sản phẩm
app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const { data } = await axios.get(`http://localhost:3002/products/${id}`);
    return res.json(data);
});
// Thêm sản phẩm
app.post("/api/products", async (req, res) => {
    const body = req.body;
    const { data } = await axios.post(`http://localhost:3002/products`, body);
    return res.json({
        message: "Thêm sản phẩm thành công",
        data,
    });
});
// Xóa sản phẩm
app.delete("/api/products/:id", async (req, res) => {
    await axios.delete(`http://localhost:3002/products/${req.params.id}`);
    return res.json({
        message: "Xóa sản phẩm thành công",
    });
});
// Cập nhật sản phẩm
app.patch("/api/products/:id", async (req, res) => {
    const { data } = await axios.patch(`http://localhost:3002/products/${req.params.id}`, req.body);
    res.json({
        message: "Cập nhật sản phẩm thành công",
        data,
    });
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
