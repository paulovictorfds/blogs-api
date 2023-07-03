const { Router } = require('express');
const { postController } = require('../controllers');
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

router.post('/', authenticateToken, postController.create);

router.get('/', authenticateToken, postController.findAll);

router.get('/:id', authenticateToken, postController.findById);

module.exports = router;