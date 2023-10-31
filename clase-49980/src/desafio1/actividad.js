class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1; 
    }

    addProduct(product) {
        
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            console.log('Todos los campos son obligatorios.');
            return;
        }

        
        if (this.products.some((p) => p.code === product.code)) {
            console.log('El código ya existe. Introduce un código único.');
            return;
        }

        
        const newProduct = {
            id: this.productIdCounter,
            ...product,
        };
        this.products.push(newProduct);
        this.productIdCounter++;

        console.log('Producto agregado con éxito.');
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            console.log('Producto no encontrado.');
        }
    }
}

const manager = new ProductManager();

manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 10.99,
    thumbnail: 'imagen1.jpg',
    code: 'P1',
    stock: 100,
});

manager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 20.99,
    thumbnail: 'imagen2.jpg',
    code: 'P2',
    stock: 50,
});

console.log('Lista de productos:');
console.log(manager.getProducts());

const product = manager.getProductById(1);
console.log('Producto encontrado por ID:');
console.log(product);

const nonExistentProduct = manager.getProductById(3);
