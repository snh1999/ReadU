const express = require('express');
const viewController = require('../controller/viewController');
const authController = require('../controller/authController');

const router = express.Router();

router.get('/me', authController.protection, viewController.getaccount);
router.use(authController.isLoggedIn);

router.get('/', viewController.getOverview);
router.get('/post/:slug', viewController.getPost);
router.get('/login', viewController.getLogInForm);
router.get('/signup', viewController.getSignUpForm);

module.exports = router;
