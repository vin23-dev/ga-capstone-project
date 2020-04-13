const router = require('express').Router();
const jobsCtrl = require('../../controllers/jobs');

router.get('/', jobsCtrl.index);
router.post('/', jobsCtrl.create);
router.get('/:id', jobsCtrl.show);
router.put('/:id', jobsCtrl.update);
router.delete('/:id', jobsCtrl.delete);

module.exports = router;