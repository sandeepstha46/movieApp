import React from 'react'
import TrendingComponent from '../components/TrendingComponent'
import TopRatedComponent from '../components/TopRatedComponent'
import UpcomingLists from "../components/commonComponents/UpcomingLists";

export default function Home() {
  return (
            <div className="items">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-8 items__list">
                    {/* <!-- trending --> */}
                    <div className="items__custom">
                      <h4 className="items__title">Trending 🔥</h4>
                      <div className="items__title--content">
                        <TrendingComponent />
                      </div>
                    </div>
                    {/* <!-- top rated --> */}
                    <div className="items__custom">
                      <h4 className="items__title">Top Rated ✨</h4>
                      <div className="items__title--content">
                        <TopRatedComponent />
                      </div>
                    </div>
                    {/* <!-- latest updates --> */}
                    <div className="items__custom">
                      <h4 className="items__title">Latest Updates</h4>
                      <div className="items__title--content">
                        <div className="all">
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-k.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-l.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-m.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-n.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-o.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-p.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-q.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-r.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
                              <img src="/img/posters/posters-s.jpg" alt="" />
                            </a>
                          </div>
                          <div className="all__item">
                            <a href="#">
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
                  <UpcomingLists />
                </div>
              </div>
            </div>
  )
}
