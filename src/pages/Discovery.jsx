import React from 'react'
import TrendingComponent from "../components/trendingComponent";
import TopRatedComponent from "../components/topRatedComponent";
import UpcomingLists from "../components/commonComponents/upcomingLists";

export default function Discovery() {
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
                                    <div className="filter__quality">
                                        <p className="filter__quality--title">Quality</p>
                                        <select name="" className="form-select qualtiy">
                                            <option value="all">All</option>
                                            <option value="720p">720p</option>
                                            <option value="1080p">1080p</option>
                                            <option value="4K">4K</option>
                                            <option value="8K">8K</option>
                                        </select>
                                    </div>
                                    <div className="filter__quality">
                                        <p className="filter__quality--title">Genre</p>
                                        <select name="" className="form-select genre">
                                            <option value="all">All</option>
                                            <option value="action">Action</option>
                                            <option value="adventure">Adventure</option>
                                            <option value="romance">Romance</option>
                                        </select>
                                    </div>
                                    <div className="filter__quality">
                                        <p className="filter__quality--title">Rating</p>
                                        <select name="" className="form-select rating">
                                            <option value="all">All</option>
                                            <option value="9">9+</option>
                                            <option value="8">8+</option>
                                            <option value="7">7+</option>
                                        </select>
                                    </div>
                                    <div className="filter__quality">
                                        <p className="filter__quality--title">Year</p>
                                        <select name="" className="form-select year">
                                            <option value="all">All</option>
                                            <option value="9">9+</option>
                                            <option value="8">8+</option>
                                            <option value="7">7+</option>
                                        </select>
                                    </div>
                                    <div className="filter__quality">
                                        <p className="filter__quality--title">Language</p>
                                        <select name="" className="lform-select anguage">
                                            <option value="all">All</option>
                                            <option value="english">English</option>
                                            <option value="korean">Korean</option>
                                            <option value="japanese">Japanese</option>
                                        </select>
                                    </div>
                                    <div className="filter__quality">
                                        <p className="filter__quality--title">Order By</p>
                                        <select name="" className="form-select oder-by">
                                            <option value="latest">Latest</option>
                                            <option value="english">Most Rated</option>
                                            <option value="korean">Most Watch</option>
                                            <option value="japanese">Most Downloaded</option>
                                        </select>
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
