const express = require('express');
const router = express.Router();
const items = require('../controllers/item');

router.route('/report')
    .get(items.reportItem);

module.exports = router;