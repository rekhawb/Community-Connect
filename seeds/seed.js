const sequelize = require('../config/connection');
const { Resident,Category,Item,Participant,Eventpost,Usercomment} = require('../models');

const residentData = require('./residentData.json');
const categoryData = require('./categoryData.json');
const itemData = require('./itemData.json');
const participantData = require('./participantData.json');
const eventpostData = require('./eventpostData.json');
const usercommentData = require('./usercommentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Resident.bulkCreate(residentData, {
    individualHooks: true,
    returning: true,
  });


  const categories = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const items = await Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
  });

  const participants = await Participant.bulkCreate(participantData, {
    individualHooks: true,
    returning: true,
  });

  const eventposts = await Eventpost.bulkCreate(eventpostData, {
    individualHooks: true,
    returning: true,
  });

  const usercomments = await Usercomment.bulkCreate(usercommentData, {
    individualHooks: true,
    returning: true,
  });



  process.exit(0);
};

seedDatabase();
