const User = require("../../models/User");

const newUser = async (data) => {
  const user = {
    name: data.name
  };
  const newUser = await User.create(user);
  return newUser;
};

module.exports = newUser;
