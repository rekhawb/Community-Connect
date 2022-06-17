const router = require('express').Router();
const { Resident } = require('../../models');

router.post('/login', async (req, res) => {
    try {
      const userData = await Resident.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.resident_id;
        req.session.loggedIn = true;
        req.session.user = userData.name;
        if( userData.name === "admin"){
          //console.log(userData.name);
          req.session.admin = true;
        }

       // console.log(req.session.loggedIn);
        //console.log(req.session.user_id);
        //console.log(req.session.admin);

        //console.log(req.session.logged_in);
       // console.log(`RESIDENT_ID: ${userData.resident_id}`);

       //const users = userData.map((data) => data.get({ plain: true }));
        
        res.
        status(200)
      //  .render('homepage',{loggedIn: req.session.loggedIn})
        .json({ user: userData, message: 'You are now logged in!' });
        
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.loggedIn = false;
      res.redirect
      req.session.destroy(() => {
        req.session.loggedIn = false;
        res.status(204).end();
        
      });
    } else {
      res.status(404).end();
    }
  });


  router.post('/newresident', async (req, res) => {
    try {
      const newResidentData = await Resident.create({
        name:req.body.name,
        email: req.body.email,
         password: req.body.password,
         address:req.body.address,
         phone:req.body.phone,
         
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = newResidentData .resident_id;
  
        res.status(200).json(newResidentData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  module.exports = router;