const {user} = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const newUser = await user.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await user.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
);
module.exports = router;