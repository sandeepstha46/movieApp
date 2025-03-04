import React, {useEffect, useState} from 'react'
import {upcomingMovies} from "../../util/themovieApi";

export default function UpcomingLists(){

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await upcomingMovies();
                setMovies(data.results);
                setLoading(false);
            } catch (error){
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }

    if (error){
        return <p>Error: {error.message}</p>;
    }


    return (
    <div className="col-lg-4 upcoming">
        <h4 className="items__title">Upcoming 🍿</h4>
        <div className="upcoming__contents">
            {movies.slice(0,4).map((data) => (
                <div className="upcoming__item" key={data.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                    <div className="upcoming__item--contents">
                        <a href="#">{data.title}</a>
                        <p className="upcoming__item--details pt-2">{data.overview}</p>
                    </div>
                </div>
                ))}
        </div>
    </div>
    )
}