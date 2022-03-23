const router = require('express').Router();
const { Todo } = require('../db/models');
const path = require('path')

router.route('/')
.post((req, res) => {
 let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.image;
  uploadPath = path.join(process.env.PWD, `/public/img/${sampleFile.name}`) ;
  console.log(uploadPath);
  sampleFile.mv(uploadPath, async function(err) {
    if (err)
      return res.status(500).send(err);
      // return res.status(500).send(err);
      await Todo.create({
        title: req.body.title,
        img: `/img/${sampleFile.name}`,
        userid:req.session.user.id
      })
    });
    res.send('File uploaded!');

})

router.route('/')
.get(async(req, res) => {
  const todo = await Todo.findOne({
    limit: 1,
    order: [['id', 'DESC']]
  })
  const response = {
    title: todo.title,
    img: todo.img,
  }
 console.log(response);
 res.json({response})
})


module.exports = router
