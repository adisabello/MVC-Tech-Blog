
const loggedIn = (req, res, next) =>{
  console.log(req.session);
    if(!req.session.userId){
      res.redirect('/loginPage');
    }else{
      next();
    }
  };

module.exports = loggedIn;