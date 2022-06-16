const Resident = require('./resident');
const Participant = require('./participant');
const Category = require('./category');
const Item = require('./item');
const Eventpost = require('./eventpost');
const Usercomment = require('./usercomment');
const Contact = require('./contact');


Resident.hasMany(Participant, {
    foreignKey: 'resident_id',
    onDelete: 'CASCADE'
  });

  Resident.hasMany(Eventpost,{
    foreignKey: 'resident_id',
    onDelete: 'CASCADE' 
  });

  Eventpost.belongsTo(Resident,{
    foreignKey: 'resident_id',
    onDelete: 'CASCADE' 
  });

  Eventpost.hasMany(Usercomment,{
    foreignKey: 'post_id',
    onDelete: 'CASCADE' 
  })


/*
added junction table  residentcommentto avoid issues while deleting residents

//ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`community_db`.`usercomment`, CONSTRAINT `usercomment_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `eventpost` (`post_id`)) 

*/

  Usercomment.belongsToMany(Resident,
    {
        through: 'residentcomment'
  });



  Category.hasMany(Participant,{
    foreignKey:'category_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })

  Participant.belongsTo(Category,{
    foreignKey:'category_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })

  Eventpost.belongsTo(Resident,{
    foreignKey: 'resident_id',
    onDelete: 'CASCADE' 
  });


  Eventpost.hasMany(Usercomment,{
    foreignKey:'post_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })

  Usercomment.belongsTo(Eventpost,{
    foreignKey:'post_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })




  Category.hasMany(Item, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
    onUpdate:'CASCADE'
  });

Item.hasOne(Category,{
  foreignKey:'category_id',
  onDelete:'CASCADE',
  onUpdate:'CASCADE'
})


  Item.hasMany(Participant,{
    foreignKey: 'item_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Participant.belongsTo(Item,{
    foreignKey:'item_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
  })




module.exports = { 
    Resident,
    Participant,
    Category,
    Item,
    Eventpost,
    Usercomment,
    Contact
};
