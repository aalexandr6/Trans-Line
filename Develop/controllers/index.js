const router = require('express').Router();
const apiroutes = require('./api');
const homeroutes=require('./home-routes')

router.use ('/api', apiroutes);
router.use ('/',homeroutes);

module.exports = router;
