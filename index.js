const express = require('express')
const server = express()
const path = require('path')

server.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

const porta = process.env.PORT || 3000
server.listen(porta,() => {
    console.log(`Servidor disponível em http://localhost:${porta}`)
})