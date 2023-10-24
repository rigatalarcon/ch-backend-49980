class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const id = this.generateUniqueId();
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
    }

    generateUniqueId() {
        return new Date().getTime().toString();
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            throw new Error("Producto no encontrado");
        }
    }

    updateProduct(id, updatedFields) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };
        } else {
            throw new Error("Producto no encontrado");
        }
    }

    deleteProduct(id) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
        } else {
            throw new Error("Producto no encontrado");
        }
    }
}

const productManager = new ProductManager();


console.log(productManager.getProducts());

productManager.addProduct("producto prueba", "Este es un producto prueba", 100, "Sin imagen", "AZ5", 30);

console.log(productManager.getProducts());

console.log(productManager.getProductById('ID_DEL_PRODUCTO'));

productManager.updateProduct('ID_DEL_PRODUCTO', { price: 150 });

productManager.deleteProduct('ID_DEL_PRODUCTO');