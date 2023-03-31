import Category from "../models/category";
import Joi from "joi";
import Product from "../models/product";

const categorySchema = Joi.object({
    name: Joi.string().required(),
});
export const get = async function (req, res) {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).json({ message: "Không có danh mục nào" });
        }
        const products = await Product.find({ categoryId: req.params.id });
        console.log(products);

        return res.json({ ...category.toObject(), products });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = categorySchema.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const data = await Category.create(body);
        if (!data) {
            return res.status(400).json({ message: "Thêm danh mục thất bại" });
        }
        return res.json({
            message: "Thêm danh mục thành công",
            data,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};
