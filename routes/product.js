import { Router } from 'express';
const router = Router();

const check = (req, res, next) => {
    const status = true;
    if(status){
        next();
    } else {
        console.log("Anh không có quyền truy cập");
    }
}
router.get('/products', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(products);
});
router.get('/product/:id', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(products.find(item => item.id === +req.params.id));
});
router.post('/products', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    products.push(req.body);
    res.json(products);
});

router.delete('/product/:id', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(products.filter(item => item.id !== +req.params.id));
});

export default router;