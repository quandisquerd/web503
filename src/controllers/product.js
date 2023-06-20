import Product from "../models/product";

export const list = async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const show = async (req, res) => {
    try {
        const product = await Product.getProductById(req.params.id);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        } else {
            res.json(product);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const create = async (req, res) => {
    try {
        const { name, price } = req.body;
        const productId = await Product.createProduct(name, price);
        res.json({ id: productId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const update = async (req, res) => {
    try {
        const { name, price } = req.body;
        await Product.updateProduct(req.params.id, name, price);
        res.json({ message: "Product updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const destroy = async (req, res) => {
    try {
        await Product.deleteProduct(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
