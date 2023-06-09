"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controller/usersController");
const router = (0, express_1.Router)();
const usersController = new usersController_1.UsersController();
router.get('/signout', usersController.signOut);
router.get('/confirm-email/:token', usersController.emailConfirmation);
router.get('/', usersController.user);
router.post('/signin', usersController.signIn);
router.post('/signup', usersController.signUp);
router.post('/google-signin', usersController.googleSignIn);
router.post('/forgot-password', usersController.sendPasswordResetLink);
router.post('/reset-password/:token', usersController.updatePasswordWithToken);
router.delete('/', usersController.deleteOne);
exports.default = router;
