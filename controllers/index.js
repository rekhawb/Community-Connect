const router = require('express').Router();
/*merge again*/



const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
//const eventsRoutes = require('./events-routes');
const donationRoutes = require('./api/donation-routes');
const caleventRoutes = require('./api/calevents-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
//router.use('/events', eventsRoutes);
router.use('/donation', donationRoutes);
router.use('/calevent',caleventRoutes);


module.exports = router;