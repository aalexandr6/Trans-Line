checkEmail = async (email) => {
    const adminData = await admin.findOne({ where: { email: email } });
    if (adminData) {
        return true;
    }
    const driverData = await drivers.findOne({ where: { email: email } });
    if (driverData) {
        return true;
    }
    return false;
};

const admin = require('./admin');
const drivers = require('./drivers');

admin.hasMany(drivers, {
    foreignKey: 'admin_id',
    onDelete: 'CASCADE',
});

drivers.belongsTo(admin, {
    foreignKey: 'driver_id',
});


module.exports ={admin, drivers};
