const router = require('express').Router();
const { Eventpost, Resident, Usercomment } = require('../../models');
const sequelize = require('../../config/connection');


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
                  attributes: ['comment_id', 'description', 'post_id', 'res_id'],
                  include: {
                    model: Resident,
                    attributes: ['name']
                  }
                },
             {
                  model: Resident,
                  attributes: ['name']
                },
              ]
        })
         console.log(dbPostData);
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


module.exports = router;