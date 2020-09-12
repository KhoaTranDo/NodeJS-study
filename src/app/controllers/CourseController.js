const Course = require("../models/Course")
const { mongooseToObject } = require('../../util/mongoose');
const { renderSync } = require("node-sass");
class CourseController {
  //Get /news
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug})
        .then(course =>
          res.render('courses/show',{course : mongooseToObject(course)})
        )
        .catch(next);
  }
  //[GET]ourses/create"
  create(req, res, next) {
      res.render("courses/create")
  }
  //[POST] courses/create/store
  store(req, res, next) {
    const formdata = req.body;
    formdata.image= `https://img.youtube.com/vi/${formdata.videoId}/default.jpg`;
    const course=new Course(formdata);
    course.save()
    .then(() => res.redirect(`/`))
    .catch(error =>{

    })
   // res.json(req.body)
    // res.send("Course save")
  }
  //[GET] /courses/:id/edit
  edit(req,res,next){
    Course.findById(req.params.id)
    .then(course => res.render('courses/edit',
    {course : mongooseToObject(course)}) )
    .catch(next)
  }
  
  update(req,res,next)
  {
    Course.updateOne({ _id : req.params.id}, req.body)
    .then(course => res.redirect('/me/stored/courses') )
    .catch(next)
  }
}
module.exports = new CourseController();
