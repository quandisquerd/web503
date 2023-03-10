import express from "express";
import axios from "axios";

// khởi tạo
const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
    const { data } = await axios.get(`https://63f5d86059c944921f67a58c.mockapi.io/products`);
    res.json(data);
});
app.get("/api/products/:id", async (req, res) => {
    const { data } = await axios.get(
        `https://63f5d86059c944921f67a58c.mockapi.io/products/${req.params.id}`
    );
    res.json(data);
});
app.post("/api/products", (req, res) => {
    console.log(req.body);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
