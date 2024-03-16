import express from 'express'
import { Login, Register, userUpdate, userWatchedMovies } from '../Controllers/UserController.js';

const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.put('/userupdate/:userId', userUpdate)
router.put('/watchedmovies', userWatchedMovies)

export default router;