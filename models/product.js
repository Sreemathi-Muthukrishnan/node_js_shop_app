const path = require("path");
const fs = require("fs");
const rootDir = require("../util/path");

const p = path.join(rootDir, 'data', 'products.json');

const  getProductsFromFile = (cb) => {
    fs.readFile(p, (error, fileContent) => {
        if(error) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }   
    })
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
         getProductsFromFile(products => {
            products.push(this.title);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log('error write', err);
            });
         })
           
    }

    static fetchAll(cb) {
       getProductsFromFile(cb);
    }
}