import fs from 'fs/promises'

export class ProductManager {
    constructor(ruta) {
        this.ruta = ruta
    }

    async getALL() {
        const json = await fs.readFile(this.ruta, 'utf-8')
        return JSON.parse(json)
    }
    async getById(id) {
        const json = await fs.readFile(this.ruta, 'utf-8')
        const buscado = productos.find(p => p.id === id)
        if (!buscado) throw new Error(`no se encontro el producto con id ${id}`)
        return buscado
    }
}