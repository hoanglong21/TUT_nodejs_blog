const express = require('express') // require -> vao module lay
const app = express() // express function, app h la instance de su dung
const port = 3000 // run o port 3000

// define route
app.get('/home', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.send('Hello World!') // day la return
})

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})