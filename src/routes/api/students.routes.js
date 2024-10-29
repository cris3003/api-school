const router = require('express').Router();

const { getAll, getById, create, update, remove } = require('../../controllers/students.controller');

router.get('/', getAll);
router.get('/:studentId', getById);
router.post('/', create);
router.put('/:studentId', update);
router.delete('/:studentId', remove);

module.exports = router;