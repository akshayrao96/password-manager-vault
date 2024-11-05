const model = require('mongoose').model;

const UserSchema = require('./user.schema.cjs');

const UserModel = model('User', UserSchema);

const insertUser = (user) => UserModel.create(user);

const getUser = (username) => UserModel.findOne({Username: username}).exec();

module.exports = {
    insertUser, getUser
};