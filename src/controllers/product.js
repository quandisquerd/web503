const data = [
    { id: 1, name: "product A" },
    { id: 2, name: "product B" },
];

export const list = (req, res) => {
    res.json(data);
};
export const read = (req, res) => {
    try {
        const id = req.params.id;
        const product = data.find((item) => item.id == id);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm",
        });
    }
};
export const add = (req, res) => {
    try {
        const product = req.body; 
        data.push({id: data.length + 1, ...product})
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}
export const remove = (req, res) => {
    try {
        const id = req.params.id; 
        const products = data.filter(item => item.id !== +id);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}

export const update =  (req, res) => {
    try {
        const id = req.params.id; 
        const newProduct = {id, ...req.body};
        const products = data.map(item => item.id == id ? newProduct : item);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}