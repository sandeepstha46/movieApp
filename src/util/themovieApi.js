import axios from 'axios';

const API_KEY = "89b2cd73637018562ad1eef02029307c";
const baseUrl = "https://api.themoviedb.org/3/";

export const getMovies = async(endpoints) => {
    try{

        const response = await axios.get(`${baseUrl}${endpoints}?api_key=${API_KEY}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error Fetching Data: ');
        throw error;
    }
};

export const upcomingMovies = async () => {
    return getMovies('movie/upcoming');
}
