const router = require('express').Router();
const { User } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
}
);

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signin');
}
);

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
}
);

// router.get('/dashboard', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Post }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('dashboard', {
//             ...user,
//             loggedIn: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }
// );


module.exports = router;
