const express = require('express');
const router = express.Router();
const users = require('../controllers/user');

router.route('/login')
    .post(users.login);

router.route('/new')
    .post(users.newUser);

router.route('/:id')
    .get(users.showUser);

module.exports = router;