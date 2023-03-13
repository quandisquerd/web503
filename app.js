import express from "express";
import axios from "axios";

// khởi tạo
const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
});
app.get("/api/products/:id", async (req, res) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/products/${req.params.id}}`);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
});

app.post("/api/products", async (req, res) => {
    try {
        const { data } = await axios.post(`http://localhost:3000/products`, req.body);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không thêm được sản phẩm",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
});

app.put("/api/products/:id", async (req, res) => {
    try {
        const { data } = await axios.put(
            `http://localhost:3000/products/${req.params.id}`,
            req.body
        );
        if (data.length === 0) {
            return res.status(200).json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    try {
        await axios.delete(`http://localhost:3000/products/${req.params.id}`);
        return res.json({
            message: "Xóa sản phẩm thành công",
        });
    } catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

export const viteNodeApp = app;
