
const router = require('express').Router();
const controller = require('./controller.js');

router.get('/verifyCode')
    .post(controller.verify);

router.route('/createDatabase')
    .post(controller.createDatabase);

module.exports = router;