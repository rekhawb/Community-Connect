const router = require('express').Router();
const donationRoutes = require('./donation-routes');
const caleventRoutes = require('./calevents-routes');
const residentRoutes = require('./resident-routes');



router.use('/donation', donationRoutes);

router.use('/calevent', caleventRoutes);


router.use('/resident',residentRoutes);

module.exports = router;
