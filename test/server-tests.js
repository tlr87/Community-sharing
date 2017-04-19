var supertest = require('supertest')
var cheerio = require('cheerio')
var test = require('tape')

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

var app = require('../server/server')

test('/items', function(t) {
  //post down to server
  //check item is in table using local knex connection
  //reseed table
  // knex.seed.run([config])
  t.end()
})

test('return items', function (t) {
  supertest(app)
    .get('/items')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }

    var response = typeof (res.body)
    var expected = 'object'

    // assert
    t.equal(response, expected)
    t.end()
  }
})

test('return item', function (t) {
  supertest(app)
    .get('/items/12003')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }

    var response = typeof(res.body)
    var expected = 'object'
    var actualID = res.body[0].item_id
    var expectedID = 12003

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.end()
  }
})

test('return user', function (t) {
  supertest(app)
    .get('/user/jb@email.com')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }

    var response = typeof (res.body)
    var expected = 'object'
    var actualID = res.body[0].email
    var expectedID = 'jb@email.com'

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.end()
  }
})

test('return loan items', function (t) {
  supertest(app)
    .get('/loanItems/7005')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }

    var response = typeof (res.body)
    var expected = 'object'
    var actualID = res.body[0].item_id
    var expectedID = 12003

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.end()
  }
})

test('return loaned items', function (t) {
  supertest(app)
    .get('/loanedItems/7006')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }
    console.log(res.body);
    var response = typeof (res.body)
    var expected = 'object'
    var actualID = res.body[0].item_id
    var expectedID = 12004
    var expectedBorrowerID = 7005
    var actualBorrowerID = res.body[0].borrowers_id

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.equal(actualBorrowerID, expectedBorrowerID)
    t.end()
  }
})

test('return borrowed items', function (t) {
  supertest(app)
    .get('/borrowedItems/7005')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }
    var response = typeof (res.body)
    var expected = 'object'
    var actualID = res.body[0].item_id
    var expectedID = 12004
    var expectedBorrowerID = 7006
    var actualBorrowerID = res.body[0].lenders_id

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.equal(actualBorrowerID, expectedBorrowerID)
    t.end()
  }
})

test('close database connection', (t) => {
  app.get('knex').destroy()
  t.end()
})
