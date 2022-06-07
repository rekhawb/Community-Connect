
const router = require('express').Router();
var initModels = require("../../models/init-models");
const { Eventpost } = require('../../models');
const sequelize = require('../../config/connection');
var models = initModels(sequelize);

/*
router.get('/', async (req, res) => {
    res.render('calevent');
  });
*/

  // route to get all dishes

  router.get('/',async(req,res)=>{
      //console.log(req.session.loggedn);
    if(req.session.loggedIn){
res.render('eventcall');
    }else{
        res.render('login');
    }
    

  })



router.get('/month/:nameMonth', async (req, res) => {
    //console.log(req.body.nameMonth);
    const query =  "select * from eventpost join time_dimension where event_dt = db_date and month_name = "+req.params.nameMonth+" ;";
    //alert(query);
    const calData = await sequelize.query(
        "select * from eventpost join time_dimension where event_dt = db_date and month_name ='"+req.params.nameMonth+"'"+" ;", 
        
        { 
          type: sequelize.QueryTypes.SELECT 
        }
      );
      
      //console.log(calData);
        
   
        const months = calData;
        //calData.map((cal) => cal.)
        //cal.get({ plain: true }));
        
        res.render('calevent', { months });
      });
    

  module.exports = router;


  /*
   const calData = await models.time_dimension.findAll({
        //attributes: [[sequelize.fn('DISTINCT', sequelize.col('month_name')) ,'month_name'],]
        attributes:[
        'month_name',
        [sequelize.fn('COUNT', sequelize.col('month_name')), 'n_month']
    ],
    group: ['month_name']
    */