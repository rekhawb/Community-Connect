const router = require('express').Router();




      router.get('/',async(req,res)=>{
        //req.session.loggedIn = false;
        res.render('homepage',{loggedIn:req.session.loggedIn});
        
          });

          router.get('/login',async(req,res)=>{
            res.render('login');
            
              });

              router.get('/signup',async(req,res)=>{
                res.render('signup');
                
                  });

                  router.get('/contact',async(req,res)=>{
                    res.render('contact');
                    
                      });

        
                      router.get('/logout',async(req,res)=>{
                        req.session.loggedIn = false;
                        res.render('login');
                        
                          });

module.exports = router;