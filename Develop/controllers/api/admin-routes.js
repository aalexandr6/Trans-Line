const { Admin } = require('../../models');
const bcrypt = require('bcrypt');
const router = require('express').Router();

router.post('/', async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10);
    const adminData = await Admin.create({
        email: req.body.email,
        password: password,
    });
    req.session.save(() => {
        req.session.admin_id = adminData.id;
        req.session.email = adminData.email;
        req.session.loggedIn = true;
        res.status(200).json({ admin: adminData, message: 'You are now logged in!' });
    });
});

router.post('/login', async (req, res) => {
    const adminData = await Admin.findOne({ where: { email: req.body.email } });
    if (!adminData) {
        res.status(400).json({ message: 'No admin with that email address!' });
        return;
    }
    const validPassword = await bcrypt.compare(req.body.password, adminData.password);
    if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
    }
    req.session.save(() => {
        req.session.admin_id = adminData.id;
        req.session.email = adminData.email;
        req.session.loggedIn = true;
        res.status(200).json({ admin: adminData, message: 'You are now logged in!' });
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
