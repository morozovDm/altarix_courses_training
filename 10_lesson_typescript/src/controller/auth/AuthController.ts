import { Router } from 'express';
import bodyParser from 'body-parser';
import VerifyToken from '@helpers/VerifyToken';
import AuthHandler from '@auth/AuthHandler';

const router = Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/login', AuthHandler.login);
router.get('/logout', AuthHandler.logout);
router.post('/register', AuthHandler.register);
router.get('/me', VerifyToken, AuthHandler.me);

export default router;