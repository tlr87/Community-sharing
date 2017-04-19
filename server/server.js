var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()
var db = require('./db')
server.set('knex', db.knex)

var items = require('./routes/items')

var user = require('./routes/user')
var userById = require('./routes/userById')
var loanItems = require('./routes/loanItems')
var loanedItems = require('./routes/loanedItems')
var borrowedItems = require('./routes/borrowedItems')
var saveUser = require('./routes/saveUser')
var loanRequest = require('./routes/loanRequest')
var search = require('./routes/search')
var updateUser = require('./routes/updateUser')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: '*'}))

server.use('/items', items)

server.use('/user', user)
server.use('/userById', userById)
server.use('/userById', user)
server.use('/loanItems', loanItems)
server.use('/loanedItems', loanedItems)
server.use('/borrowedItems', borrowedItems)

server.use('/saveUser', saveUser)
server.use('/loanRequest', loanRequest)
server.use('/search', search)
server.use('/updateUser', updateUser)

module.exports = server
