import React, {useEffect, useState} from 'react'
import {upcomingMovies} from "../../util/themovieAPI";

export default function UpcomingLists(){

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await upcomingMovies(movies);
                setMovies(data.results);
                setLoading(false);
            } catch (error){
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [movies]);

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
            {movies.map((data) => (
                <div className="upcoming__item">
                <img src="/img/posters/posters-j.jpg" alt="" />
                <div className="upcoming__item--contents">
                <a href="#">{data.title}</a>
                <p className="upcoming__item--details">{data.overview}</p>
                </div>
                </div>
                ))}




            <div className="upcoming__item">
                <img src="/img/posters/posters-j.jpg" alt="" />
                <div className="upcoming__item--contents">
                    <a href="#">Star Wars | Airing on Sunday</a>
                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                </div>
            </div>
            <div className="upcoming__item">
                <img src="/img/posters/posters-k.jpg" alt="" />
                <div className="upcoming__item--contents">
                    <a href="#">Star Wars | Airing on Sunday</a>
                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                </div>
            </div>
            <div className="upcoming__item">
                <img src="/img/posters/posters-l.jpg" alt="" />
                <div className="upcoming__item--contents">
                    <a href="#">Star Wars | Airing on Sunday</a>
                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                </div>
            </div>
            <div className="upcoming__item">
                <img src="/img/posters/posters-m.jpg" alt="" />
                <div className="upcoming__item--contents">
                    <a href="#">Star Wars | Airing on Sunday</a>
                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                </div>
            </div>
        </div>
    </div>
    )
}