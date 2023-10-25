const http = require('http')

const server = http.createServer((Request, Response) => {
    console.log(requeste)
    Response.end('recibido')
})