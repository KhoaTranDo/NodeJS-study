const Course = require("../models/Course")
const { mongooseToObject } = require('../../util/mongoose');


class SiteController {
  //Get /news

  index(req, res, next) {

    // Course.find({},function(err,courses){
    //     if(!err) 
    //     res.json(courses);
    //     else {
    //     res.status(400).json({error: 'Error!!!'})
    //   }
    // });

    // Course.find({})
    //       .then(courses => {
    //         courses=courses.map(courses=>courses.toObject())
    //         res.render('home',{courses});
    //       })
    //       .catch(next);

          Course.find({})
          .then((courses) => {
              res.render('home', {
                  courses: mutipleMongooseToObject(courses),
              });
          })
          .catch(next);
  }

  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
