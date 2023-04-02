const sequelize = require('../config/connection');
const driver = require('../models/drivers');
const driverData = require('./driverData.json');
const admin = require('../models/admin');
const adminData = require('./adminData.json');
const driverLogs = require('../seeds/driverLogs.json');
const bcrypt = require('bcrypt');

const driverData = require('./driverData.json');
const adminData = require('./adminData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true })
};
//might have to make admin and driver data into users
const logs = [];
for (const log of logData) {
  const newLog = await Log.create({
    driver_id: log.driver_id,
    date: log.date,
    time: log.time,
    location: log.location,
    notes: log.notes,

  });
  logs.push(newLog);
}

const drivers = [];

for (const driver of driverData) {
  const newDriver = await Driver.create({
    driver_name: driver.driver_name,
    password: driver.password,
    city: driver.city,
    state: driver.state,

  });
  drivers.push(newDriver);
}
const admins = [];
for (const admin of adminData) {
  const newAdmin = await admin.create({
    admin_name: admin.admin_name,
    password: admin.password,

  });
  admins.push(newAdmin);
}

const driverLogs = [];
for (const driverLog of driverLogs) {
  const newDriverLog = await driverLog.create({
    driver_id: driverLog.driver_id,
    date: driverLog.date,
    time: driverLog.time,
    location: driverLog.location,
    notes: driverLog.notes,
    driver_name: driverLog.driver_name,
    city: driverLog.city,
    state: driverLog.state,
  });
  driverLogs.push(newDriverLog);
}

process.exit(0);


seedDatabase();

