
const router = require('express').Router();
const controller = require('./controller.js');

router.route('/verifyCode')
    .post(controller.verify);

router.route('/createDatabase')
    .post(controller.createDatabase);

router.route('/login')
    .post(controller.login);

module.exports = router;