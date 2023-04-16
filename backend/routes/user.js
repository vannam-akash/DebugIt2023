const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.route('/login')
    .post(user.login);

router.route('/:id')
    .get(user.showUser);

module.exports = router;