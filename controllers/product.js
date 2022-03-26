import Product from '../models/product'
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        const product = await new Product(req.body).save();
        console.log('product', product);
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const products = await Product.find().sort({createAt: -1});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const product = await Product.findOne(filter);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}