const router = require('express').Router();
const { Usercomment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Usercomment.findAll({})
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', async (req, res) => {

  try{
    const query =  "select c.comment_id,c.post_id,c.resident_id,c.description,r.name from usercomment c  INNER JOIN resident r ON c.resident_id = r.resident_id and c.post_id = "+req.params.id+";"
   

  const commentData = await sequelize.query(
      query, 
      
      { 
        type: sequelize.QueryTypes.SELECT 
      }
    );

      

     // console.log(posts);
     req.session.save(() => {
          
      req.session.loggedIn = true;

      const posts= commentData;
      
      res.render('addnewcomment', {
          posts,loggedIn:req.session.loggedIn,user_id:req.session.user_id

      });
    });
  }
  catch (err) {
      console.log(err);
      res.status(500).json(err);
  }

});

router.get('/all/:id', async (req, res) => {

  try{
    const query =  "select c.comment_id,c.post_id,c.resident_id,c.description,r.name from usercomment c  INNER JOIN resident r ON c.resident_id = r.resident_id and c.post_id = "+req.params.id+";"
   

  const commentData = await sequelize.query(
      query, 
      
      { 
        type: sequelize.QueryTypes.SELECT 
      }
    );

      const posts= commentData;

     // console.log(posts);
     req.session.save(() => {
          
      req.session.loggedIn = true;
      
      res.render('comments', {
          posts,loggedIn:req.session.loggedIn

      });
    });
  }
  catch (err) {
      console.log(err);
      res.status(500).json(err);
  }

});

router.post('/', withAuth, (req, res) => {
  // check the session
  console.log(req.session.user_id);
  if (req.session) {
   Usercomment.create({
      description: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
     resident_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', withAuth, (req, res) => {
    Usercomment.destroy({
        where: {
          comment_id: req.params.id
        }
      })
        .then(dbCommentData => {
          if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
          }
          res.json(dbCommentData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;