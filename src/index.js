const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodoverride = require('method-override');


const route = require('./routes');
const db = require("./config/db");

//conect db
db.connect();

const app = express();
const port = 3000;
//template engine
app.engine('hbs', handlebars({ extname: '.hbs',
helpers: {
  sum:(a,b)=>a+b,
}
 }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(methodoverride('_method'))

route(app);

//http
app.use(morgan('combined'));


//127.0.0.1 -localhost:
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
