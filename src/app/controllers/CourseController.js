const Course = require("../models/Course")
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  //Get /news
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug})
        .then(course =>{
          res.render('courses/show',{course : mongooseToObject(course)})
        })
        .catch(next);
  }
  //[GET]ourses/create"
  create(req, res, next) {
      res.render("courses/create")
  }
  //[POST] courses/create/store
  store(req, res, next) {
    const formdata = req.body;
    formdata.image= `https://img.youtube.com/vi/${req.body.videoId}/default.jpg`
    const course=new Course(req.body);
    course.save()
    .then(() => res.redirect(`/`))
    .catch(error =>{

    })

    res.send("Course save")
}
}
module.exports = new CourseController();
