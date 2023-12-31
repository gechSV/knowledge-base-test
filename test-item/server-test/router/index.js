const Router = require('express')
const userController = require('../controllers/user-controller');
const roleController = require('../controllers/role-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth-middleware');
const roleMiddleware = require('../middleware/role-middleware');

router.post('/registration',
                body('email').isEmail(), 
                body('password').isLength( {min: 3, max: 32} ),    
                userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.post('/addNewRole', roleMiddleware(["TEST", "ADMIN"]), roleController.addNewRole);
router.post('/addUserRole', userController.addUserRole);

router.get('/test', roleController.test)


module.exports = router;