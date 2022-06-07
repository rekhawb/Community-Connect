
const router = require('express').Router();



router.get('/', async (req, res) => {
  if(req.session.loggedIn){
    res.render('donation');
        }else{
            res.render('login');
        }
        
  });


  module.exports = router;