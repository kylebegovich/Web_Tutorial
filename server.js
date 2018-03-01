const express = require('express')
const app = express()

console.log('May Node be with you')
console.log(__dirname);

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
