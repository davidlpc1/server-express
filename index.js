const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

const path = require('path')

server.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(PORT,() => {
    console.log(`Servidor disponível em http://localhost:${PORT}`)
})