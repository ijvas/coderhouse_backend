const fs = require ('fs');

class productManager {
    constructor(path){
        this.products = [];
        this.path = path;
        fs.writeFileSync(path, '[]');
    }

    async addProduct(title, description, price, thumbnail, code, stock){
        let newProduct = {title, description,price,thumbnail,code,stock, id: this.#generarId()};
        let productByCode = this.products.find((prod) => prod.code == code);
        if(productByCode){
            console.log('The product is already in our database');
        }else if(!newProduct.title){
            console.error("There's a missing property for product creation");
        }else if(!newProduct.description){
            console.error("There's a missing property for product creation");
        }else if(!newProduct.price){
            console.error("There's a missing property for product creation");
        }else if(!newProduct.thumbnail){
            console.error("There's a missing property for product creation");
        }else if(!newProduct.code){
            console.error("There's a missing property for product creation");
        }else if(!newProduct.stock){
            console.error("There's a missing property for product creation");
        }else{
            this.products = [...this.products, newProduct];
            await fs.promises.writeFile(`'${this.pat}'`, this.products);
            return true
        }
    }

    #generarId(){
        let maxId = 0;
        for (let i = 0; i < this.products.length; i++) {
            const prod = this.products[i];
            if(prod.id > maxId){
                maxId = prod.id
            }
        }
        return maxId + 1;
    }

    getProducts(){
        console.log(this.products);
        return this.products;
    }

    getProductById(id){
        let productById = this.products.find((prod) => prod.id == id);
        if(productById){
            console.log(productById);
        }else{
            console.error("Couldn't find the item with that id");
        }
    }

}


const manager = new productManager('./products.json');

manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
