
const path = require('path');

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//const multer = require("multer");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');




const app = express();
const PORT = process.env.PORT || 3001;
//Import express-handlebars///////////////////////////////////////////////////////////////////////////////////////////////
//const fileStorageEngine = multer.diskStorage({
  //destination: (req,file,cb) => {
    //cb(null,'/uploads')
  //},
  //filename: (req,file,cb) =>{
//    cb(null,req.file.originalname)
  //},
//});

//const upload = multer({storage: fileStorageEngine});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//this tells handlebars is the templating engine
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 360000,

  },
  resave: false,
  saveUninitialized: true,
 store: new SequelizeStore({
    db: sequelize
 })
};
app.use(session(sess));





app.engine('handlebars',hbs.engine);

// this  ensures thatfiles ending with .handlebars are the handlebarfiles
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(multer().array()) ;
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(path.join(__dirname,'')))

//app.use(require('./controllers/index'));


app.use(routes);



sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => console.log(
    `\nServer running on port ${PORT}. Visit http://localhost:${PORT}!`
  )
);
});
