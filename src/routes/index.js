const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');
function route(app) {
  //c1
  // app.get('/search', (req, res) => {
  //   res.render('search');
  // })
  //c2
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses',coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;
