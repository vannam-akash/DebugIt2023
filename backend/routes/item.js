const express = require('express');
const router = express.Router();
const items = require('../controllers/item');

router.route('/')
    .get(items.index);
    
router.route('/report')
    .post(items.reportItem);
    
router.route('/new')
    .post(items.newItem);

router.route('/:id/claims/:cId')
    .put(items.setClaim);


router.route('/:id')
    .get(items.showItem)
    // .put(items.updateItem);
    .delete(items.deleteItem);

module.exports = router;