import axios from 'axios';
import { useEffect, useState } from 'react';

export const GetMovie = ({ movieTitle }) => {
    const [movieInfo, setMovieInfo] = useState(null);
    const apiKey = 'aafa86502a60244c7844fcc84ca5ecce';

    useEffect(() => {
        const getData = async () => {
            try {
                // Step 1: Search for the Movie
                const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`);
                const movieId = searchResponse.data.results[0]?.id; 

                // Step 2: Get Movie Details
                const movieDetailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
                const movieDetails = movieDetailsResponse.data;

                // Step 3: Get Cast Information
                const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
                const cast = creditsResponse.data.cast.map(member => ({ name: member.name, image: `https://image.tmdb.org/t/p/w500${member.profile_path}` }));
                
                // Store all movie information in state
                setMovieInfo({
                    title: movieDetails.title,
                    overview: movieDetails.overview,
                    posterImage: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
                    releaseYear: movieDetails.release_date.split('-')[0],
                    genres: movieDetails.genres.map(genre => genre.name),
                    languages: movieDetails.spoken_languages.map(language => language.name),
                    cast: cast,                    
                    runtime: movieDetails.runtime 
                });
            } catch (error) {
                // console.log(error);
            }
        };
        getData();
    }, [movieTitle, apiKey]);

    return movieInfo;
};
