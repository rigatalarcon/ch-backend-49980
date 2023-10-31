import express from 'express'
import { ProductManager } from './ProductManager'
import { port } from './port'


const pm = new ProductManager(PRODUCT_JSON)

const app = express()

app.get('/src/desafio3/db/src/ProductManager.js' , async (req, res) =>{
    try {
        const product = await pm.getAll()
        res.json(product) 
    } catch (error) {
        res.jason({
            status: 'error',
            message: error.message
        }) 
    }
})

app.listen(port, () => {
    console.log(`conectado y escuchando en puerto ${port}`);
})