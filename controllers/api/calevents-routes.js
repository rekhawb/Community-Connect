
const router = require('express').Router();
var initModels = require("../../models/init-models");
const sequelize = require('../../config/connection');
var models = initModels(sequelize);

/*
router.get('/', async (req, res) => {
    res.render('calevent');
  });
*/

  // route to get all dishes
router.get('/', async (req, res) => {
    const calData = await models.time_dimension.findAll({
        attributes: ['month_name']
      }).catch((err) => { 
        res.json(err);
      });
        const months = calData.map((cal) => cal.get({ plain: true }));
        res.render('calevent', { months });
      });


  module.exports = router;