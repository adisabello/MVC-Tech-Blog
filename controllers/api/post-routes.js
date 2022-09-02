const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// The `/api/posts` endpoint

router.get('/', (req, res) => {
  Post.findAll({
    include: [{model: User}, {model: Comment, include: [{model: User}]}]
  }).then(response =>{
    // res.json(response);
    console.log(response);
    res.render('main', {posts: response})
  }).catch(err =>{
    console.log(err);
  })
});

router.get('/my-posts', (req, res) => {
  var uid = req.session.userId;
  Post.findAll({
    where: {
      userId: uid
    },
    include: [{model: User}, {model: Comment}]
  }).then(response =>{
    res.render('dashboard', {posts: response})
  }).catch(err =>{
    console.log(err);
  })
});

router.get('/post', (req, res) => {
  var title = req.query.title;
  var content = req.query.content;
  var uid = req.session.userId;
  const datetime = new Date();
  const [date] = datetime.toISOString().split('T');

  Post.create({
    title: title,
    contents: content,
    userId: uid,
    dateCreated: date
  })
    .then((category) => {
      res.redirect('/dashboard');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/edit', (req, res) => {
  var id = req.query.id;
  var title = req.query.title;
  var content = req.query.content;
  console.log("here editing");
  Post.update({
    title: title,
    contents: content
  }, {
    where: {
      id: id,
    },
  })
    .then((category) => {
      res.redirect('/dashboard');
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  Post.destroy({
    where:{
      id: id
    }
  }).then(response =>{
    res.redirect('/dashboard');
  }).catch(err=>{
    res.status(400).json(err)
  });
});

module.exports = router;
