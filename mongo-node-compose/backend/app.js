const express = require('express')
const restfull = require('node-restful')
const serve = express()
const mongooser = restfull.mongooser

// Database
mongooser.Promise = global.Promise
mongooser.connect('mongodb:db/mydb')

//Teste
serve.get('/', (req, resp, next) => resp.send('Backend'))

// Start Server
serve.listen(3000)