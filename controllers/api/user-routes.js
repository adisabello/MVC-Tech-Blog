const router = require('express').Router();
const { User } = require('../../models');

router.get('/login', (req, res) =>{
  var username = req.query.username;
  var pass = req.query.password;

  User.findAll({
    where: {
      username: username,
      password: pass
    }
  }).then(response =>{
    if(response.length == 0){
      res.render('login', {error: "Invalid credentials"})
    }else{
      req.session.userId = response[0].dataValues.id;
      console.log(req.session, "saved");
      res.redirect('/dashboard');
    }
  }).catch(err =>{
    console.log(err);
    res.status(400).json(err);
  });

});

router.get('/register', (req, res) =>{
  var username = req.query.username;
  var pass = req.query.password;

  User.findAll({
    where: {
      username: username,
    }
  }).then(response =>{
    if(response.length != 0){
      res.render('register', {error: "Username already exists"})
    }else{
      User.create({
        username: username,
        password: pass
      }).then(response =>{
        req.session.userId = response.dataValues.id;
        res.redirect('/dashboard');
      });
    }
  }).catch(err =>{
    console.log(err);
    res.status(400).json(err);
  });

});


module.exports = router;
