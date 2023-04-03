const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
class Admin extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
Admin.init(
{
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
    name: {
    type: DataTypes.STRING,
    allowNull: false,
},
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
    isEmail: true,
},
},
    password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    len: [8],
},
},
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin',
}
);

module.exports = Admin;