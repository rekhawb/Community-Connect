const router = require('express').Router();
const { Eventpost, Resident, Usercomment,Contact} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  if(req.session.loggedIn){
    res.render('event',{loggedIn:req.session.loggedIn});
        }else{
            res.render('login');
        }
        
  });



  
router.get('/all', async (req, res) => {

  try{
  const query =  "select distinct e.post_id,e.name as event_name,e.description as event_desc, e.event_dt as event_date,r.name as resident_name from    eventpost   e   INNER JOIN resident r ON e.resident_id = r.resident_id";
   

  const postData = await sequelize.query(
      query, 
      
      { 
        type: sequelize.QueryTypes.SELECT 
      }
    );

      const posts= postData;

     // console.log(posts);
     req.session.save(() => {
      res.render('posts', {
          posts,loggedIn:req.session.loggedIn,user_id:req.session.user_id
        });
      });
  }
  catch (err) {
      console.log(err);
      res.status(500).json(err);
  }

});


router.get('/myevents', async (req, res) => {

  try{
    const query =  "select distinct e.post_id,e.name as event_name,e.description as event_desc, e.event_dt as event_date,r.name as resident_name from    eventpost   e   INNER JOIN resident r ON e.resident_id = r.resident_id and r.resident_id = "+req.session.user_id+";"
   

  const postData = await sequelize.query(
      query, 
      
      { 
        type: sequelize.QueryTypes.SELECT 
      }
    );

      const posts= postData;

     // console.log(posts);
     req.session.save(() => {
          
      req.session.loggedIn = true;
      req.session.editpost= true;

      res.render('myevents', {
          posts,loggedIn:req.session.loggedIn,editpost:req.session.editpost

      });
    });
  }
  catch (err) {
      console.log(err);
      res.status(500).json(err);
  }

});



  


router.get('/edit/:id', (req, res) => {
  Eventpost.findOne({
    where: {
      post_id: req.params.id
    },
    attributes: [
      'post_id',
      'name',
      'description',
      'event_dt'
            ],
    include: [
      // include the Comment model here:
      // {
      //   model: Resident,
      //   attributes: ['name']
      // },
      // {
      //   model: Usercomment,
      //   attributes: ['comment_id', 'comment_text', 'post_id', 'resident_id'],
      //   include: {
      //     model: Resident,
      //     attributes: ['name']
      //   }
      // }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
         // serialize the data
         const post = dbPostData.get({ plain: true });

         res.render('editevent', {
             post,
             loggedIn: true
             });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





router.put('/:id',  (req, res) => {
  Eventpost.update({
      name: req.body.name,
      description: req.body.description
    },
    {
      where: {
        post_id: req.params.id
      }
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





router.post('/addevent',async (req, res)=>{

 try{
  console.log(req.session.user_id);
     const newevent = await Eventpost.create({
      ...req.body,
      resident_id : req.session.user_id,
      },
      
      );
     // res.status(201).json(newevent);

     res.render('posts',{loggedIn:req.session.loggedIn,user_id:req.session.user_id});

 } catch(err) {
  console.log(err);
  res.status(500).json(err);
}  

});




router.post('/contact',async (req, res)=>{

  try{
    console.log(req.body);
   
      const newmessage = await Contact.create({
       email:req.body.email,
       phone:req.body.contact,
       message:req.body.message
       },
       
       );
      // res.status(201).json(newevent);
 
      res.status(200).json(newmessage);
 
  } catch(err) {
   console.log(err);
   res.status(500).json(err);
 }  
 
 });



router.delete('/:id',  (req, res) => {
  Eventpost.destroy({
    where: {
      post_id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No event found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/addnew',(req,res) =>{
  res.render('addnewevent',{loggedIn:req.session.loggedIn,user_id:req.session.user_id});
})

module.exports = router;