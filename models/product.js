const path = require("path");
const fs = require("fs");
const rootDir = require("../util/path");

const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (error, fileContent) => {
            let products = [];
            if(!error) {
                products = JSON.parse(fileContent);
                console.log(products);
            }
            products.push(this.title);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log('error write', err);
            });
        });
    }

    static fetchAll() {
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (error, fileContent) => {
            if(error) {
                return [];
            }
            return JSON.parse(fileContent);
        })
    }
}