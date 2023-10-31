import express from 'express'

const estudiantes = [
    { id: 1, nombre: 'eduardo', curso: 'backend' },
    { id: 2, nombre: 'mauro', curso: 'backend' },
    { id: 3, nombre: 'emiliano', curso: 'backend' },
]

const profes = [
    { id: 1, nombre: 'marian', rol: 'profe' },
    { id: 2, nombre: 'leandro', rol: 'tutor' },
    { id: 3, nombre: 'franco', rol: 'tutor' },
    { id: 4, nombre: 'mario', rol: 'tutor' },
    { id: 5, nombre: 'samir', rol: 'tutor' },
    { id: 6, nombre: 'alejandra', rol: 'tutor' },
]
const app = express()

app.get('/estudiantes', (req, res)=> {
    res.json({estudiantes})
})

app.get('/profes', (req, res)=> {
    res.json({profes})
})
app.get('/', (req, res)=> {
    //res.send(`<h1>Aguante el Backend!</h1>`)
    res.sendFile('index.html', {root:'./views'})
})

app.listen(8080, () => {
    console.log('conectado al puerto 8080')
}) 