import express from 'express'
import { Login, Register, userUpdate, userWatchedMovies } from '../Controllers/UserController.js';
import { VerifyToken, VerifyUser } from '../Utils/VerifyToken.js';


const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.put('/userupdate/:userId', VerifyToken, VerifyUser, userUpdate)
router.put('/watchedmovies', VerifyToken, VerifyUser, userWatchedMovies)

export default router;