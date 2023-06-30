const { Router } = require('express');
const { userController } = require('../controllers');
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

router.post('/', userController.create);

router.get('/', authenticateToken, userController.findAll);

module.exports = router;
