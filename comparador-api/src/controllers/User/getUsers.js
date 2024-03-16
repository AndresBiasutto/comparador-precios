const User = require("../../models/User");

const getUser = async () => {
  const user = await User.find();
  return user;
};

module.exports = getUser;