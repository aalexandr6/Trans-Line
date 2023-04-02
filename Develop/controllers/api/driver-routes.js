const {drivers} = require('../../models/driver.js');
const bcrypt = require('bcrypt');

const router = require('express').Router();

router.post('/', async (req, res) => {
    await drivers.create({
        email: req.body.email,
        password: req.body.password,
    });
    res.status(200).json({message: 'Driver created'});
});

router.post('/login', async (req, res) => {
    const driverData = await drivers.findOne({ where: { email: req.body.email } });
    if (!driverData) {
        res.status(400).json({ message: 'No driver with that email address!' });
        return;
    }
    const validPassword = await bcrypt.compare(req.body.password, driverData.password);
    if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
    }
    req.session.save(() => {
        req.session.driver_id = driverData.id;
        req.session.email = driverData.email;
        req.session.loggedIn = true;
        res.status(200).json({ driver: driverData, message: 'You are now logged in!' });
    });
});

router.post ('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;

