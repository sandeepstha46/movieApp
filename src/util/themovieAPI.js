import axios from 'axios';

const API_KEY = "69f57e2aa089019b734a3252fe9db18a";
const baseUrl = "https://api.themoviedb.org/3/";

export const getMovies = async(endpoints) => {
    try{
        const response = await axios.get(`${baseUrl}${endpoints}?api_key=${API_KEY}`, {});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error Fetching Data: ',error);
        throw error;
    }
};

export const upcomingMovies = async () => {
    return getMovies('movie/upcoming?language=en-US&page=1');
}
