const router = require('express').Router();
const { Eventpost, Resident, Usercomment } = require('../../models');
const sequelize = require('../../config/connection');


router.get('/', async (req, res) => {
    try{
    const query =  "select distinct e.name as event_name,e.description as event_desc, e.event_dt as event_date,r.name as resident_name from    eventpost   e   INNER JOIN usercomment c ON e.post_id = c.post_id INNER JOIN resident r ON c.resident_id = r.resident_id";
     

    const postData = await sequelize.query(
        query, 
        
        { 
          type: sequelize.QueryTypes.SELECT 
        }
      );

        const posts= postData;

        console.log(posts);
        res.render('posts', {
            posts,

        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

// add new event page
router.get('/newevent', async (req, res) => {

    res.render('addnewevent',{loggedIn:req.session.loggedIn});
});

router.post('/',async (req, res)=>{

   try{
       const newevent = await Eventpost.create({...req.body});
        res.status(201).json(newevent);

   } catch(err) {
    console.log(err);
    res.status(500).json(err);
}  

});





module.exports = router;