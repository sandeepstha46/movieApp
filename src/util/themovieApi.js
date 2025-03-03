import axios from 'axios';

const API_KEY = "89b2cd73637018562ad1eef02029307c";
const baseUrl = "https://api.themoviedb.org/3/";

export const getMovies = async(endpoints) => {
    try{

        const response = await axios.get(`${baseUrl}${endpoints}?api_key=${API_KEY}`);
        return response.data
    } catch (error) {
        throw error;
    }
};

export const upcomingMovies = async () => {
    return getMovies('movie/upcoming');
}

export const topRatedMovies = async () => {
    return getMovies('movie/top_rated');
}

export const moviesLists = async () => {
    return getMovies('movie/now_playing');
}

export const searchMovies = async (query) => {
    return getMovies(`discover/movie`);
}
