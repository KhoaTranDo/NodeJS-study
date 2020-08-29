const express = require('express')
const path= require("path")
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000


//template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  // res.send( //Goi thong tin len trang web
  //  '<h1 style="color:red">Hello Word!!!</h1>'
  // )
  res.render('home');
})
app.get('/news', (req, res) => {
  // res.send( //Goi thong tin len trang web
  //  '<h1 style="color:red">Hello Word!!!</h1>'
  // )
  res.render('news');
})
//http
app.use(morgan('combined'))



//127.0.0.1 -localhost:
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
