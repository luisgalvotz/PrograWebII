const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post("/createUser", user_controller.user_create);

module.exports = router;