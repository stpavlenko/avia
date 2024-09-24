const express = require('express');
const { getUserData, createUser } = require('../controllers/users.controller');

const router = express.Router();

router.get('/getData', getUserData);

module.exports = router;