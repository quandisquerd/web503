import express from "express";
import axios from "axios";

const app = express();

// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const { data: products } = await axios.get(
            "https://63f5d86059c944921f67a58c.mockapi.io/products"
        );
        if (products.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json({
            message: "Lấy danh sách sản phẩm thành công",
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});
app.get("/api/products/:id", async (req, res) => {
    try {
        const { data: product } = await axios.get(
            `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`
        );
        if (!product) {
            return res.json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        res.json({
            message: "Lấy sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});

app.post("/api/products", async (req, res) => {
    try {
        const { data: product } = await axios.post(
            `https://63f5d86059c944921f67a58c.mockapi.io/products`,
            req.body
        );
        if (!product) {
            return res.json({
                message: "Thêm sản phẩm không thành công",
            });
        }
        res.json({
            message: "Thêm sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});

app.put("/api/products/:id", async (req, res) => {
    try {
        const { data: product } = await axios.put(
            `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`,
            req.body
        );
        if (!product) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        res.json({
            message: "Cập nhật sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});
app.delete("/api/products/:id", async (req, res) => {
    try {
        const { data: product } = await axios.delete(
            `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`
        );
        // if (!product) {
        //     return res.json({
        //         message: "Xóa sản phẩm không thành công",
        //     });
        // }
        res.json({
            message: "Xóa sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});

app.listen(8080, function () {
    console.log("Server is running on port 8080");
});
