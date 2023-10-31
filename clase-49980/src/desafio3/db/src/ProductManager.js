import fs from 'fs/promises'

export class productManager {
    constructor(ruta) {
        this.ruta = ruta
    } 
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    async getProducts() {
        return this.products;
    }

    async addProduct(product) {
        const id = this.generateUniqueId();
        const newProduct = { id, ...product };
        this.products.push(newProduct);
        return newProduct;
    }

    async getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }

    async updateProduct(id, updatedFields) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
            throw new Error("Producto no encontrado");
        }
        const updatedProduct = { ...this.products[productIndex], ...updatedFields };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    }

    async deleteProduct(id) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
            throw new Error("Producto no encontrado");
        }
        this.products.splice(productIndex, 1);
    }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }
}


async function main() {
    const productManager = new ProductManager();

    const newProduct = await productManager.addProduct({
        title: "producto",
        description: "zapatilla",
        price: 500,
        thumbnail: "S/I",
        code: "azh123",
        stock: 30,
    });

    console.log("Producto agregado:", newProduct);

    const allProducts = await productManager.getProducts();
    console.log("Todos los productos:", allProducts);

    const productId = newProduct.id;
    const productById = await productManager.getProductById(productId);
    console.log("Producto por ID:", productById);

    const updatedProduct = await productManager.updateProduct(productId, {
        description: "Actualización de la descripción",
        price: 250,
    });
    console.log("Producto actualizado:", updatedProduct);

    await productManager.deleteProduct(productId);
    console.log("Producto eliminado");

    const productsAfterDelete = await productManager.getProducts();
    console.log("Productos después de eliminar:", productsAfterDelete);
}

main().catch((error) => {
    console.error(error);
});
