import React from 'react'
import SidebarComponent from '../components/SidebarComponent'

export default function Home() {
  return (
    <div className='main-wrapper-div'>
      <div className="page-wrapper">
        {/* <!-- sidebar --> */}
        <SidebarComponent />
        {/* <!-- end of sidebar --> */}

        {/* <!-- menu --> */}
        <section className="wrapper-items">

          {/* Notification section here */}

          <div className="items">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 items__list">
                  {/* <!-- trending --> */}
                  <div className="items__custom">
                    <h4 className="items__title">Trending 🔥</h4>
                    <div className="items__title--content">
                      <div className="swiper trendingSlider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide poster">
                            <div className="poster__item">
                              <img className="poster__background" src="/img/posters/posters-a.jpg" alt="" />
                              <div className="poster__content">
                                <img className="poster__image" src="/img/posters/posters-a.jpg" alt="" />
                                <div className="poster__details">
                                  <p className="poster__title">Aquaman</p>
                                  <ul className="list-unstyled poster__tiny-info">
                                    <li>2013</li>
                                    <li>PG-13</li>
                                    <li>1h 58min</li>
                                  </ul>
                                  <p className="poster__genre">
                                    Genre:
                                    <b>Action, Comedy</b>
                                  </p>
                                  <p className="poster__info">Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half...</p>
                                  <div className="poster__cta">
                                    <a className="poster__cta--trailer" href="javascript(void 0)">Trailer</a>
                                    <a className="poster__cta--movie" href="javascript(void 0)">Watched?</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide poster">
                            <img className="poster__background" src="/img/posters/posters-b.jpg" alt="" />
                            <div className="poster__content">
                              <img className="poster__image" src="/img/posters/posters-b.jpg" alt="" />
                              <div className="poster__details">
                                <p className="poster__title">Aquaman</p>
                                <ul className="list-unstyled poster__tiny-info">
                                  <li>2013</li>
                                  <li>PG-13</li>
                                  <li>1h 58min</li>
                                </ul>
                                <p className="poster__genre">
                                  Genre:
                                  <b>Action, Comedy</b>
                                </p>
                                <p className="poster__info">Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half...</p>
                                <div className="poster__cta">
                                  <a className="poster__cta--trailer" href="javascript(void 0)">Trailer</a>
                                  <a className="poster__cta--movie" href="javascript(void 0)">Watched?</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide poster">
                            <img className="poster__background" src="/img/posters/posters-c.jpg" alt="" />
                            <div className="poster__content">
                              <img className="poster__image" src="/img/posters/posters-c.jpg" alt="" />
                              <div className="poster__details">
                                <p className="poster__title">Aquaman</p>
                                <ul className="list-unstyled poster__tiny-info">
                                  <li>2013</li>
                                  <li>PG-13</li>
                                  <li>1h 58min</li>
                                </ul>
                                <p className="poster__genre">
                                  Genre:
                                  <b>Action, Comedy</b>
                                </p>
                                <p className="poster__info">Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half...</p>
                                <div className="poster__cta">
                                  <a className="poster__cta--trailer" href="javascript(void 0)">Trailer</a>
                                  <a className="poster__cta--movie" href="javascript(void 0)">Watched?</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide poster">
                            <img className="poster__background" src="/img/posters/posters-d.jpg" alt="" />
                            <div className="poster__content">
                              <img className="poster__image" src="/img/posters/posters-d.jpg" alt="" />
                              <div className="poster__details">
                                <p className="poster__title">Aquaman</p>
                                <ul className="list-unstyled poster__tiny-info">
                                  <li>2013</li>
                                  <li>PG-13</li>
                                  <li>1h 58min</li>
                                </ul>
                                <p className="poster__genre">
                                  Genre:
                                  <b>Action, Comedy</b>
                                </p>
                                <p className="poster__info">Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half...</p>
                                <div className="poster__cta">
                                  <a className="poster__cta--trailer" href="javascript(void 0)">Trailer</a>
                                  <a className="poster__cta--movie" href="javascript(void 0)">Watched?</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination trending-pagination"></div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- top rated --> */}
                  <div className="items__custom">
                    <h4 className="items__title">Top Rated ✨</h4>
                    <div className="items__title--content">
                      <div className="swiper topRated">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide poster__tr">
                            <a href="javascript(void 0)">
                              <img className="poster__tr--image" src="/img/posters/posters-l.jpg" alt="" />
                            </a>
                          </div>
                          <div className="swiper-slide poster__tr">
                            <a href="javascript(void 0)">
                              <img className="poster__tr--image" src="/img/posters/posters-m.jpg" alt="" />
                            </a>
                          </div>
                          <div className="swiper-slide poster__tr">
                            <a href="javascript(void 0)">
                              <img className="poster__tr--image" src="/img/posters/posters-n.jpg" alt="" />
                            </a>
                          </div>
                          <div className="swiper-slide poster__tr">
                            <a href="javascript(void 0)">
                              <img className="poster__tr--image" src="/img/posters/posters-o.jpg" alt="" />
                            </a>
                          </div>
                          <div className="swiper-slide poster__tr">
                            <a href="javascript(void 0)">
                              <img className="poster__tr--image" src="/img/posters/posters-p.jpg" alt="" />
                            </a>
                          </div>
                          <div className="swiper-slide poster__tr">
                            <a href="javascript(void 0)">
                              <img className="poster__tr--image" src="/img/posters/posters-q.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- latest updates --> */}
                  <div className="items__custom">
                    <h4 className="items__title">Latest Updates</h4>
                    <div className="items__title--content">
                      <div className="all">
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-k.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-l.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-m.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-n.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-o.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-p.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-q.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-r.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-s.jpg" alt="" />
                          </a>
                        </div>
                        <div className="all__item">
                          <a href="javascript(void 0)">
                            <img src="/img/posters/posters-t.jpg" alt="" />
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
                {/* <!-- upcoming --> */}
                <div className="col-lg-4 upcoming">
                  <h4 className="items__title">Upcoming 🍿</h4>
                  <div className="upcoming__contents">
                    <div className="upcoming__item">
                      <img src="/img/posters/posters-j.jpg" alt="" />
                      <div className="upcoming__item--contents">
                        <a href="javascript(void 0)">Star Wars | Airing on Sunday</a>
                        <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                      </div>
                    </div>
                    <div className="upcoming__item">
                      <img src="/img/posters/posters-k.jpg" alt="" />
                      <div className="upcoming__item--contents">
                        <a href="javascript(void 0)">Star Wars | Airing on Sunday</a>
                        <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                      </div>
                    </div>
                    <div className="upcoming__item">
                      <img src="/img/posters/posters-l.jpg" alt="" />
                      <div className="upcoming__item--contents">
                        <a href="javascript(void 0)">Star Wars | Airing on Sunday</a>
                        <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                      </div>
                    </div>
                    <div className="upcoming__item">
                      <img src="/img/posters/posters-m.jpg" alt="" />
                      <div className="upcoming__item--contents">
                        <a href="javascript(void 0)">Star Wars | Airing on Sunday</a>
                        <p className="upcoming__item--details">30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers,</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
