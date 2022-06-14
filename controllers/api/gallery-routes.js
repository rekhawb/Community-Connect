const router = require('express').Router();
const path = require('path');
//const multer = require('multer');


const multer = require("multer");
const uuid4 = require("uuid").v4;

const storage = multer.diskStorage({
  destination: path.join(__dirname, "/public/images"),
  filename: function (req, file, cb) {
    const fullName =file.originalname;
    cb(null, fullName);
  },
});

//path.join(__dirname, "/public/uploads");

const upload = multer({storage: storage }).array('files',5);

router.post("/",upload,async(req,res) =>{
  //res.send(req.file);
    /*console.log(req.body);
    console.log(pathName);
    console.log(req.file);*/
   // res.session.loggedIn = true;
   req.session.save(() => {
          
    req.session.loggedIn = true;
 
    //res.redirect('/gallery',{loggedIn:req.session.loggedIn});
    res.redirect('/gallery',{loggedIn:req.session.loggedIn});
  });

  });

  module.exports = router;