const path = require('path');
const express = require('express'); // require -> vao module lay
const morgan = require('morgan'); // import morgan
const {engine} = require('express-handlebars');

const app = express(); // express function, app h la instance de su dung
const port = 3000; // run o port 3000

// config
app.use(express.static(path.join(__dirname, 'public'))); 
// => http://localhost:3000/ ~ public

//http logger
app.use(morgan('combined'));

//template engine
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, 'resources/views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'))


// define route
app.get('/', (req, res) => {
    // var a = 1;
    // var b = 2;

    // var c = a + b;
    // above a b c is for debug
//   res.send('Hello World!') // day la return
    res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});