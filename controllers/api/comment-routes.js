const router = require('express').Router();
const { Comment} = require('../../models');
const loggedIn = require('../middleware/auth')


router.get('/comment', loggedIn, (req, res) => {
  var pid = req.query.id;
  var comment = req.query.comment;
  var uid = req.session.userId;
  const datetime = new Date();
  const [date] = datetime.toISOString().split('T');
  Comment.create({
    postId: pid,
    contents: comment,
    user_id: uid,
    dateCreated: date
  })
    .then((dat) => {
      res.redirect('/home');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


router.delete('/:id', (req, res) => {



});

module.exports = router;
