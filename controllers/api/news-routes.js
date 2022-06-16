const router = require('express').Router();
const path = require('path');
//const multer = require('multer');

const pathName = path.join( __dirname,"/public/uploads");

const multer = require("multer");
const uuid4 = require("uuid").v4;
const storage = multer.diskStorage({
  destination: path.join(__dirname, "/public/uploads"),
  filename: function (req, file, cb) {
    const fullName =file.originalname;
    cb(null, fullName);
  },
});

//path.join(__dirname, "/public/uploads");

const upload = multer({storage: storage });

router.post("/",upload.single('files'),async(req,res) =>{
  //res.send(req.file);
    /*console.log(req.body);
    console.log(pathName);
    console.log(req.file);*/
   // res.session.loggedIn = true;
   //{loggedIn:req.session.loggedIn},
   
   req.session.save(() => {
          
    req.session.loggedIn = true;

  res.redirect('/news');
  });
  });

  module.exports = router;