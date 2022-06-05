
const router = require('express').Router();



router.get('/', async (req, res) => {
    res.render('donation');
  });


  module.exports = router;