var router = require('express').Router();
var nobelCtrl = require('../controller/nobel.controller');
router.route('/name').post(nobelCtrl.getByName);
router.route('/year').post(nobelCtrl.getByYear);
router.route('/year/category').post(nobelCtrl.getByYearAndCategory);
router.route('/get').get(nobelCtrl.getAll);

module.exports = router;