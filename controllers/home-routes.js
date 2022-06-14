const router = require('express').Router();
var fs = require("fs");



      router.get('/',async(req,res)=>{
        //req.session.loggedIn = false;
        res.render('homepage',{loggedIn:req.session.loggedIn,user:req.session.user,admin:req.session.admin});
        
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

                      router.get('/news',async(req,res)=>{
                        req.session.loggedIn = true;
                        if(req.session.user === "admin"){
                          req.session.admin = true;
                        
                        }else{
                          req.session.admin = false;
                        }

                          var filename = 'news.json';
                          var fileDir = __dirname + '/api/public/uploads/'+filename;
                          var file = fs.readFileSync(fileDir);
                          var jsonObject = JSON.parse(file);
                          //res.json(jsonObject)
                          //console.log(jsonObject);

                          res.render('news',{news:jsonObject, loggedIn:req.session.loggedIn,admin:req.session.admin});

                        })



                        router.get('/gallery',async(req,res)=>{
                          req.session.loggedIn = true;
                          if(req.session.user === "admin"){
                            req.session.admin = true;
                          
                          }else{
                            req.session.admin = false;
                          }
  
                           // var filename = 'news.json';
                           // var fileDir = __dirname + '/api/public/uploads/'+filename;
                           // var file = fs.readFileSync(fileDir);
                            //var jsonObject = JSON.parse(file);
                            //res.json(jsonObject)
                            //console.log(jsonObject);
  
                            res.render('gallerydisplay');
  
                          })



                        

                          

        
                      router.get('/logout',async(req,res)=>{
                        req.session.loggedIn = false;
                        res.render('login');
                        
                          });



module.exports = router;