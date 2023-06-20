import connection from "../db";

export default class Product {
    static getAllProducts() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM products", (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
    static getProductById(id) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });
    }
    static createProduct(name, price) {
        return new Promise((resolve, reject) => {
            connection.query(
                "INSERT INTO products (name, price) VALUES (?, ?)",
                [name, price],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results.insertId);
                }
            );
        });
    }
    static updateProduct(id, name, price) {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE products SET name = ?, price = ? WHERE id = ?",
                [name, price, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve();
                }
            );
        });
    }
    static deleteProduct(id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM products WHERE id = ?", [id], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}
