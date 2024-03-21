import { useState, useEffect } from 'react';
import AxiosRequest from './Axiosrequest';

const apiKey = 'aafa86502a60244c7844fcc84ca5ecce';

const useGetMovies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllMovies = async () => {
        try {
            const res = await AxiosRequest.get('/movie/getmovies');
            const moviesWithDetails = await Promise.all(
                res.data.map(async movie => {
                    try {
                        // Step 1: Search for the movie
                        const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movie.movieTitle)}`);
                        const searchResult = await searchResponse.json();
                        const movieId = searchResult.results[0]?.id;

                        if (movieId) {
                            // Step 2: Get Movie Details
                            const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
                            const movieDetails = await movieDetailsResponse.json();

                            // Step 3: Get Cast Information
                            const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
                            const creditsData = await creditsResponse.json();
                            const cast = creditsData.cast.map(member => ({
                                name: member.name,
                                image: member.profile_path ? `https://image.tmdb.org/t/p/w500${member.profile_path}` : null
                            }));

                            return {                            
                                overview: movieDetails.overview,
                                releaseYear: movieDetails.release_date.split('-')[0],
                                genres: movieDetails.genres.map(genre => genre.name),
                                languages: movieDetails.spoken_languages.map(language => language.name),
                                cast: cast,
                                runtime: movieDetails.runtime,
                                rating: movieDetails.vote_average.toFixed(1),
                                ...movie
                            };
                        } else {                            
                            return {
                                ...movie
                            };
                        }
                    } catch (error) {
                        console.error("Error fetching TMDB data:", error);                        
                        return {
                            ...movie
                        };
                    }
                })
            );
            setMoviesData(moviesWithDetails);
            setIsLoading(false); 
        } catch (error) {
            console.log(error);
            setIsLoading(false); 
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return { moviesData, isLoading };
};

export default useGetMovies;
