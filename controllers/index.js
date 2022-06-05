const router = require('express').Router();



const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const eventsRoutes = require('./events-routes');
const donationRoutes = require('./donation-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/events', eventsRoutes);
router.use('/donation', donationRoutes);


module.exports = router;
 