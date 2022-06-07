
const router = require('express').Router();

/*merge again*/


const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

//const eventsRoutes = require('./events-routes');
//const donationRoutes = require('./api/donation-routes');
//const caleventRoutes = require('./api/calevents-routes');


router.use('/', homeRoutes);

router.use('/api', apiRoutes);


//router.use('/events', eventsRoutes);
//router.use('/donation', donationRoutes);
//router.use('/calevent',caleventRoutes);



module.exports = router;