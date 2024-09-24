const { Users } = require('../models/index');

// начальный запрос на инфу о пользователе
exports.getUserData = async (userId) => {
  let actualUser = await Users.findOne({ where: { id: userId } });
  return { actualUser };
};