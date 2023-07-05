const { app } = require('./bin/routes')
const port = 3000
const express = require('express')

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})
