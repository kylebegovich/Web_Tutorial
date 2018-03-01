const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

console.log('May Node be with you')

app.listen(3000, function() {
  console.log('listening on 3000')
})

//app.get(path, callback)

/*
app.get('/', (req, res) => {
  res.send('Hello, Node!')
})
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})
