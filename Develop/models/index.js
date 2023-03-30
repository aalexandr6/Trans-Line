const user = require('./user');
const data = require('./data');

user.hasMany(data, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

data.belongsTo(user, {
    foreignKey: 'user_id'
});

module.exports = { user, data };

