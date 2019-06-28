
const router = require('express').Router();
const controller = require('./controller.js');

router.route('/createDatabase')
    .post(controller.createDatabase);


module.exports = router;