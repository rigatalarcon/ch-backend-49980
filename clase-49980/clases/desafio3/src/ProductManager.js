import fs from 'fs/promises'

export class ProductManager {
    constructor(ruta) {
        this.ruta = ruta
    } 

async getALL () {
    const json = await fs.readFile(this.ruta, 'utf-8')
    return JSON.parse(json)
    }
}