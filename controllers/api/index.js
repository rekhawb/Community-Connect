const router = require('express').Router();
const donationRoutes = require('./donation-routes');
const caleventRoutes = require('./calevents-routes');
const residentRoutes = require('./resident-routes');
const postRoutes = require('./post-routes');
const newsRoutes = require('./news-routes.js');




router.use('/donation', donationRoutes);
//router.use('/viewdonation', donationRoutes);

router.use('/calevent', caleventRoutes);
router.use('/resident',residentRoutes);
router.use('/posts', postRoutes);
router.use('/newsupload',newsRoutes);

module.exports = router;
