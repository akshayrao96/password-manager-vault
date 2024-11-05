const model = require('mongoose').model;

const PasswordSchema = require('./password-manager.schema.cjs');

const PasswordModel = model('Password', PasswordSchema);

const insertPassword = (password) => PasswordModel.create(password);

const getAllPasswords = () => PasswordModel.find({}).exec();

const getPasswordById = id => PasswordModel.findById(id).exec();

const deletePassword = id => PasswordModel.deleteOne({_id: id})

const updatePassword = (id, passwordInfo) => PasswordModel.findOneAndUpdate({_id: id}, passwordInfo);

const getPasswordByOwner = owner => PasswordModel.find({
    owner: owner,
}).exec();

module.exports = {
    getPasswordById,
    deletePassword,
    updatePassword,
    insertPassword,
    getAllPasswords,
    getPasswordByOwner,
}