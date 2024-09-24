const usersService = require('../services/users.service');

exports.getUserData = async (req, res) => {
  try {
    const { userId } = req.query;
    const userData = await usersService.getUserData(userId);
    res.send(userData);
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message);
  }
};