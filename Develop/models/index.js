
const Admin = require('./admin');
const Drivers = require('./drivers');

Admin.hasMany(Drivers, {
    foreignKey: 'admin_id',
    onDelete: 'CASCADE',
});

Drivers.belongsTo(Admin, {
    foreignKey: 'admin_id',
});


module.exports ={Admin, Drivers};
