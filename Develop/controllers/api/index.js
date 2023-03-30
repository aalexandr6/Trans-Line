const router = require('express').Router();
const useroutes = require('./user-routes');
const dataroutes = require('./data-routes');

router.use('/users', useroutes);
router.use('/data', dataroutes);

module.exports = router;