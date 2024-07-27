const UserModel = require("../models/user.model");

const createUser = async (user) => {
  await UserModel.create(user);
};

const isEmailTaken = async (email) => {
  const userDetails = await UserModel.findOne({ email });
  return userDetails;
};

module.exports = {
  createUser,
  isEmailTaken,
};
