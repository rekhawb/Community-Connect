const router = require('express').Router();

/*merge again*/


const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');





router.use('/', homeRoutes);



module.exports = router;