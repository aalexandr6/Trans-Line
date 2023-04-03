const router = require('express').Router();
const { Logs } = require('../../models/Logs');

router.post('/', async (req, res) => {
    try {
      const newLog = await Logs.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newLog);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;