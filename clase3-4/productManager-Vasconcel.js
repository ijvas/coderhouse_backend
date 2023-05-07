class productManager {
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
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

let admin = new productManager();
admin.getProducts();
admin.addProduct('Testing product', 'This is a testing product', 200, 'Without Image', 'abc123', 25);
admin.getProducts();
console.log('');
console.log('Now will try to add the same product to the database:');
admin.addProduct('Testing product', 'This is a testing product', 200, 'Without Image', 'abc123', 25);
console.log('');
console.log('Now will try to add a product without a needed property:');
admin.addProduct('Testing product', 'This is a testing product', 'Without Image', 'abc123', 25);
console.log('');
console.log('Now will add two more products to the database and show the products stored in:');
admin.addProduct('Notebook', 'computers', 300000, 'Without Image', 'abc124', 17);
admin.addProduct('Smartphone', 'cellphones', 300000, 'Without Image', 'abc125', 17);
admin.getProducts();
console.log('');
console.log('Now will try to find a product with an unexisting id:');
admin.getProductById(5);
console.log('');
console.log('Now will find a product with the 3rd Id:');
admin.getProductById(3);