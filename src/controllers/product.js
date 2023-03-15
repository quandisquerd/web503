import axios from "axios";
import Joi from "joi";
import Product from "../models/product";

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string(),
});
export const getAll = async function (req, res) {
    try {
        // const { data } = await axios.get("http://localhost:3002/products");
        const data = await Product.find();
        if (data.length === 0) {
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({ message: "Xóa thành công", product });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productSchema.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const data = await Product.create(body);
        if (!data) {
            return res.status(400).json({ message: "Thêm sản phẩm thất bại" });
        }
        return res.json({
            message: "Thêm sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Product.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!data) {
            return res.status(400).json({ message: "Cập nhật thất bại" });
        }
        return res.json({
            message: "Cập nhật thành công",
            data,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
export const get = async function (req, res) {
    try {
        // const { data } = await axios.get(`http://localhost:3002/products/${req.params.id}`);
        const data = await Product.findOne({ _id: req.params.id });
        if (!data) {
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }
        return res.json(data);
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
