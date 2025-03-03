import React from 'react'
import TrendingComponent from "../components/TrendingComponent";
import TopRatedComponent from "../components/TopRatedComponent";
import UpcomingLists from "../components/commonComponents/UpcomingLists";

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
        <div className="items">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 items__list">
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
                        <div className="items__custom">
                            <div className="items__title--content">
                                <div className="all">
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-k.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-l.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-m.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-n.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-o.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-p.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-q.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-r.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-s.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-t.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-k.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-l.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-m.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-n.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-o.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-p.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-q.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-r.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-s.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-t.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-l.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-m.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-n.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-o.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="all__item">
                                        <a href="">
                                            <img src="/img/posters/posters-p.jpg" alt=""/>
                                        </a>
                                    </div>
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
                        </div>
                    </div>
                    <div className="col-lg-4 upcoming">
                        <h4 className="items__title">Upcoming 🍿</h4>
                        <div className="upcoming__contents">
                            <div className="upcoming__item">
                                <img src="/img/posters/posters-j.jpg" alt=""/>
                                <div className="upcoming__item--contents">
                                    <a href="">Star Wars | Airing on Sunday</a>
                                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and
                                        the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that
                                        knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue
                                        stormtrooper and two smugglers,</p>
                                </div>
                            </div>
                            <div className="upcoming__item">
                                <img src="/img/posters/posters-k.jpg" alt=""/>
                                <div className="upcoming__item--contents">
                                    <a href="">Star Wars | Airing on Sunday</a>
                                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and
                                        the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that
                                        knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue
                                        stormtrooper and two smugglers,</p>
                                </div>
                            </div>
                            <div className="upcoming__item">
                                <img src="/img/posters/posters-l.jpg" alt=""/>
                                <div className="upcoming__item--contents">
                                    <a href="">Star Wars | Airing on Sunday</a>
                                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and
                                        the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that
                                        knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue
                                        stormtrooper and two smugglers,</p>
                                </div>
                            </div>
                            <div className="upcoming__item">
                                <img src="/img/posters/posters-m.jpg" alt=""/>
                                <div className="upcoming__item--contents">
                                    <a href="">Star Wars | Airing on Sunday</a>
                                    <p className="upcoming__item--details">30 years after the defeat of Darth Vader and
                                        the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that
                                        knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue
                                        stormtrooper and two smugglers,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
