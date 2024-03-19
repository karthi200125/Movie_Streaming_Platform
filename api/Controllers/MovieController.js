import MovieModel from '../Modals/MovieModel.js';

export const CreateMovie = async (req, res, next) => {
    try {
        const { movieTitle, TitleImg, thumpnailImg, movieVideo, moviePreview, isFree } = req.body;
        const newMovie = await MovieModel.create({ movieTitle, TitleImg, thumpnailImg, movieVideo, moviePreview, isFree });
        res.status(200).json({ message: "Movie has been created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Movie create failed" });
    }
};

export const DeleteMovie = async (req, res, next) => {
    try {
        const { movieId } = req.params;
        const deletedMovie = await MovieModel.findByIdAndDelete(movieId);
        res.status(200).json({ message: "Movie has been Deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Movie delete failed" });
    }
};

export const UpdateMovie = async (req, res, next) => {
    try {
        const { movieId } = req.params;
        const updatedMovie = await MovieModel.findByIdAndUpdate(movieId, req.body, { new: true });
        res.status(200).json(updatedMovie);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Movie update failed" });
    }
};

export const GetMovies = async (req, res, next) => {
    try {
        const movies = await MovieModel.find();
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "getmovies failed" });
    }
};

export const GetMovie = async (req, res, next) => {
    try {
        const { movieId } = req.params;
        const movie = await MovieModel.findById(movieId);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "getmovie failed" });
    }
};
