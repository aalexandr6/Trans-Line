const {user} = require('../models/user');
const {data} = require('../models/data');
const sequelize = require('../config/connection');
const userData = require('./userData.json');
const driverData = require('./driverData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true })
};

//login info
const users = await user.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

//driver info
const drivers = await data.bulkCreate(driverData, {
  individualHooks: true,
  returning: true,
});


for (const data of driverData) {
  await data.create({
    ...data,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
}

process.exit(0);

seedDatabase();
