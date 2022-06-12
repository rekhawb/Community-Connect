
const router = require('express').Router();
const { Resident, Category,Item,Participant } = require('../../models');


router.get('/', async (req, res) => {
  if(req.session.loggedIn){
    res.render('donation');
        }else{
            res.render('login');
        }
        
  });


  
    router.get('/view', async (req, res) => {
      try {
        const donationData = await Participant.findAll({
         
          where: {resident_id: req.session.user_id }/* ,
          include    : [{
                  model:Category,
                  include:[Item]

          }]
        */
        
        });

        /*req.session.save(() =>{
          req.session.viewDonate = true;
        })*/
    
        const donations = donationData.map((data) =>
          data.get({ plain: true })
        );

        console.log(donations);
        //console.log(req.session.viewDonate);
    
        res.render('viewdonation', { donations});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
    


    router.get('/contribute', async (req, res) => {
      try {
        const categoryData = await Category.findAll({
         
          
          include    : [{
                  model:Item,
                 

          }]
        
        
        });
    
        const categories =categoryData.map((data) =>
          data.get({ plain: true })
        );

     //   console.log(categories);
        //console.log(req.session.viewDonate);
    
        res.render('contribute', { categories});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


    router.post('/newcontribute', async(req,res) =>{

      try{

        console.log(req.body.category_id);
        console.log(req.body.item_id);
        console.log("Quantity"+req.body.qty);
    
    const newContribution = await Participant.create({
      resident_id: req.session.user_id,
      category_id: req.body.category_id,
      item_id: req.body.item_id,
      item_qty: req.body.qty,
      category_name:req.body.category_name,
      item_name:req.body.item_name

      
    });
    res.status(200).json(newContribution);
    
      }catch(err){
        res.status(400).json(err);
      }
    });


    router.delete('/:participant_id', async (req, res) => {
      try {
        const donationData = await Participant.destroy({
          where: {
            participant_id: req.params.participant_id
          },
        });
    
        if (!donationData) {
          res.status(404).json({ message: 'No donation found !' });
          return;
        }
    
        res.status(200).json(donationData);
      } catch (err) {
        res.status(500).json(err);
      }
    });



  module.exports = router;