const {data} = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const newdata = await data.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(Newdata);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await data.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!data) {
            res.status(404).json({ message: 'No data found with this id!' });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
);
module.exports = router;

