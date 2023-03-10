import axios from "axios";

export const getAll = async (req, res) => {
    const { data } = await axios.get("http://localhost:3002/products");
    return res.json(data);
};
export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const { data } = await axios.get(`http://localhost:3002/products/${id}`);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có sản phẩm",
            });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { data } = await axios.post(`http://localhost:3002/products`, body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm sản phẩm thất bại",
            });
        }
        return res.status(200).json({
            message: "Thêm sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        await axios.delete(`http://localhost:3002/products/${req.params.id}`);
        return res.json({
            message: "Xóa sản phẩm thành công",
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const { data } = await axios.patch(
            `http://localhost:3002/products/${req.params.id}`,
            req.body
        );
        if (!data) {
            return res.status(400).json({
                message: "Cập nhật sản phẩm thất bại",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
