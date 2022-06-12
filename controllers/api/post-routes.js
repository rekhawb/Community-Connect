const router = require('express').Router();
const { Eventpost, Resident, Usercomment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        console.log('======================');
        const dbPostData = await Eventpost.findAll({
            attributes: [
                'post_id',
                'name',
                'description',
                'event_dt'
            ],
            //   order: [['created_at', 'DESC']],
               include: [

                {
                  model: Usercomment,
                  attributes: ['comment_id', 'description', 'post_id', 'resident_id'],
                  include: {
                    model: Resident,
                    attributes: ['name']
                  }
                }
             
              ]
        })
         //console.log(dbPostData);
        // dbPostdata = res.status(200).json(dbPostData);

        const dbData = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        res.render('posts', {
            dbData,

        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.get('/:id', (req, res) => {
    Eventpost.findOne({
      where: {
        post_id: req.params.id
      },
      attributes: [
        'post_id',
        'description',        
      ],
      include: [
        // include the Comment model here:
        {
          model: Resident,
          attributes: ['name']
        },
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // }
      ]
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
  //==============================================================================

//get the event by id
router.get('/edit/:id', (req, res) => {
    Eventpost.findOne({
      where: {
        post_id: req.params.id
      },
      attributes: [
        'post_id',
        'name',
        'description'       
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
// add new event page
router.get('/newevent', async (req, res) => {

    res.render('addnewevent');
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

  //======================================================================================

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




module.exports = router;