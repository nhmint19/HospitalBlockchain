import { Router } from 'express';
import { requestMessage } from '../actions/auth/requestMessage';
import { verifySignature } from '../actions/auth/verifySignature';
import { authenticateUser } from '../actions/auth/authenticateUser';
import { logout } from '../actions/auth/logout';

const router = Router();

router.post('/request-message', requestMessage);
router.post('/verify', verifySignature);
router.get('/authenticate-user', authenticateUser);
router.get('/logout', logout);

export default router;
