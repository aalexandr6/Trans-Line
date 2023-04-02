const router = require('express').Router();

const admin = require('./admin-routes');
const driver = require('./driver-routes');

router.use('/admin', admin);
router.use('/driver', driver);

module.exports = router;

