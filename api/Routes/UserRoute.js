import express from 'express'
import { Login, Register, Stripe, updateIsSub, userUpdate, userWatchedMovies } from '../Controllers/UserController.js';
import { VerifyToken, VerifyUser } from '../Utils/VerifyToken.js';

const router = express.Router()

router.put('/stripe', Stripe)
router.put('/issubupdate', updateIsSub)
router.post('/register', Register)
router.post('/login', Login)
router.put('/userupdate/:userId', VerifyToken, VerifyUser, userUpdate)
router.put('/watchedmovies', VerifyToken, VerifyUser, userWatchedMovies)

export default router;