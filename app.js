import express from "express";

const app = express();

app.use(express.json());

// Trả về danh sách
app.get("/products", (req, res) => {
    res.json(products);
});
// Trả về một sản phẩm
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id == id);
    res.json(product);
});
// Thêm sản phẩm
app.post("/products", (req, res) => {
    // Lấy dữ liệu từ client body gửi lên
    const product = req.body;
    // push vào mảng products
    products.push(product);
    // trả về client dạng json
    res.json({
        message: "Thêm sản phẩm thành công",
        products,
    });
});
// Xóa sản phẩm
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const newProducts = products.filter((item) => item.id != id);
    res.status(200).json({
        message: "Xóa sản phẩm thành công",
        products: newProducts,
    });
});
// Cập nhật sản phẩm

app.patch("/products/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const newProducts = products.map((item) => (item.id == id ? body : item));
    res.status(200).json({
        message: "Cập nhật sản phẩm thành công",
        products: newProducts,
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
