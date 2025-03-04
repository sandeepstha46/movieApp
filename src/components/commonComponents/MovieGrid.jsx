import React from "react"
import useFetchMovies from "../../hooks/useFetchMovies";

export default function MovieGrid() {

    const { movies, loading, error } = useFetchMovies();

    if (loading){
        return <p>Loading...</p>;
    }

    if (error){
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="items__title--content">
            <div className="all">
                {movies.map((data) => (
                    <div className="all__item" key={data.id}>
                        <a href="#">
                            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                        </a>
                    </div>
                ))}
            </div>
            <div className="all-pagination">
                <ul className="list-unstyled all-pagination__list">
                    <li>1</li>
                    <li>2</li>
                    <li>....</li>
                    <li>49</li>
                    <li>50</li>
                </ul>
            </div>
        </div>
    )
}