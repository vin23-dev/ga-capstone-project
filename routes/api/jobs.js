const router = require('express').Router();
const jobsCtrl = require('../../controllers/jobs');

router.use(require('../../config/auth'));
router.get('/', jobsCtrl.index);
router.post('/', isLoggedIn, jobsCtrl.create);
router.get('/:id', jobsCtrl.show);
router.put('/:id', jobsCtrl.update);
router.delete('/:id', jobsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;