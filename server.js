const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))


var db

MongoClient.connect('mongodb://test_app_user:test_app_pw@ds139242.mlab.com:39242/kyle_tutorial_app', (err, client) => {
  if (err) return console.log(err)
  db = client.db('kyle_tutorial_app')
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

console.log('May Node be with you')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to db')
    res.redirect('/')
  })
})
