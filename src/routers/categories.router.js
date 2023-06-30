const { Router } = require('express');
const { categoriesController } = require('../controllers');
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

router.post('/', authenticateToken, categoriesController.create);

module.exports = router;
