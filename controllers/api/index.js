const router = require('express').Router();
const donationRoutes = require('./donation-routes');
const caleventRoutes = require('./calevents-routes');


router.use('/donation', donationRoutes);

router.use('/calevent', caleventRoutes);




module.exports = router;
