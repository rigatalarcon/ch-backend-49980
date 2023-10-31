import express from 'express'
import { ProductManager } from './ProductManager.js'
import { PORT, PRODUCT_JSON } from './config.js'

const pm = new ProductManager(PRODUCT_JSON)

const app = express()

app.get('../productos', async (req, res) => {
    const stock = parseInt(req.query.stock)

    try {
        const productos = await pm.getALL({stock})
        res.json(productos)

    } catch (error) {
        res.json({
            status: 'error',
            message: error.message
        })
    }
})
app.get('../productos/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const productos = await pm.getById(id)
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