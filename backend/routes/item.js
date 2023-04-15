const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const items = require('../controllers/item');

router.route('/')
    .get(items.index)

router.route('/report')
    .post(items.reportItem);

module.exports = router;