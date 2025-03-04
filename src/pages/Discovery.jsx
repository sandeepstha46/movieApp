import React from 'react'
import MovieGrid from "../components/commonComponents/MovieGrid";

export default function Discovery() {

    const quality =[
        {id: 0, name: "All"},
        {id: 1, name: "720p"},
        {id: 2, name: "1080p"},
    ]

    const genre =[
        {id: 0, name: "All"},
        {id: 1, name: "Action"},
        {id: 2, name: "Adventure"},
    ]

    const rating = [
        {id: 0, name: "All"},
        {id: 1, name: "1"},
        {id: 2, name: "2"},
        {id: 3, name: "3"},
        {id: 4, name: "4"},
        {id: 5, name: "5"},
    ]

    const year = [
        {id: 0, name: "All"},
        {id: 1, name: "2021"},
        {id: 2, name: "2020"},
    ]

    const language = [
        {id: 0, name: "All"},
        {id: 1, name: "English"},
        {id: 2, name: "Korean"},
        {id: 3, name: "India"}
    ]

    const orderBy = [
        {id: 0, name: "Latest"},
        {id: 1, name: "Most Rated"},
        {id: 2, name: "Most Watch"},
    ]

    return (
            <>
                <div className="items__custom">
                    <div className="items__search">
                        <form action="" className="items__form">
                            <input type="text" name="search"/>
                            <button type="submit" className="search__button">
                                <i className="bi bi-search"></i> Search
                            </button>
                        </form>
                        <div className="search__filter">
                            <div className="filter__item">
                                <p className="filter__item--title">Quality</p>
                                <input type="text" name="quality" placeholder="Quality"/>
                                <ul className="select-list quality">
                                    {quality.map((data) => (
                                        <li key={data.id}>{data.name}</li>
                                    ))}
                                </ul>

                            </div>
                            <div className="filter__item">
                                <p className="filter__item--title">Genre</p>
                                <input type="text" name="genre" placeholder="Genre"/>
                                <ul className="select-list genre">
                                    {genre.map((data) => (
                                        <li key={data.id}>{data.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="filter__item">
                                <p className="filter__item--title">Rating</p>
                                <input type="text" name="rating" placeholder="Rating"/>
                                <ul className="select-list rating">
                                    {rating.map((data) => (
                                        <li key={data.id}>{data.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="filter__item">
                                <p className="filter__item--title">Year</p>
                                <input type="text" name="year" placeholder="Year"/>
                                <ul className="select-list year">
                                    {year.map((data) => (
                                        <li key={data.id}>{data.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="filter__item">
                                <p className="filter__item--title">Language</p>
                                <input type="text" name="language" placeholder="Language"/>
                                <ul className="select-list language">
                                    {language.map((data) => (
                                        <li key={data.id}>{data.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="filter__item">
                                <p className="filter__item--title">Order By</p>
                                <input type="text" name="orderby" placeholder="Order by"/>
                                <ul className="select-list order-by">
                                    {orderBy.map((data) => (
                                        <li key={data.id}>{data.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <MovieGrid />
            </>
    )
}
