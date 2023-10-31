import express from 'express'
import { ProductManager } from './ProductManager'
import { PORT, PRODUCT_JSON } from './config'

const pm = ProductManager(PRODUCT_JSON)

const app = express()

app.get('../productos', async (req, res) => {
    try {
        const productos = await pm.getALL()
        res.json(productos)

    } catch (error) {
        res.json({
            status: 'error',
            message: error.message
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`conectado y escuchando puerto ${PORT}`)
})