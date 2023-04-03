const router = require('express').Router();

const adminRoutes = require('./admin-routes');
const driverRoutes = require('./driver-routes');

router.use('/admin', adminRoutes);
router.use('/driver', driverRoutes);

module.exports = router;

