import { useState, useEffect } from 'react';
import {moviesLists} from "../util/themovieApi";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await moviesLists();
                setMovies(data.results);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { movies, loading, error };
};

export default useFetchMovies;
