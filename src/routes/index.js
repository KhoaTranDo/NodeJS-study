const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  //c1
  // app.get('/search', (req, res) => {
  //   res.render('search');
  // })
  //c2
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
}

module.exports = route;
