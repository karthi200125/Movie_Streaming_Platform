import express from 'express'
import { CreateMovie, DeleteMovie, GetMovies, UpdateMovie } from '../Controllers/MovieController.js'

const router = express.Router()

router.post('/createmovie', CreateMovie)
router.put('/updatemovie/:movieId', UpdateMovie)
router.delete('/deletemovie/:movieId', DeleteMovie)
router.get('/getmovies', GetMovies)

export default router;