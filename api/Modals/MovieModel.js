import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    movieTitle: { type: String },
    TitleImg: { type: String },
    thumpnailImg: { type: String },
    movieVideo: { type: String },
    moviePreview: { type: String },
    isFree: { type: Boolean, default: false },
}, { timestamps: true });

export default MovieModel = mongoose.model("Movie", MovieSchema);

