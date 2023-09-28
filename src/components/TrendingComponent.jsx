import React from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css/pagination';
import 'swiper/css/navigation';


register();

export default function TrendingComponent() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
        });
    }, []);
    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view="auto"
            space-between='30'
            pagination='true'
            pagination-clickable='true'
            autoplay-delay='2000'
            class="trendingSlider"
        >
            <swiper-slide class='poster'>
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
            </swiper-slide>
            <swiper-slide class='poster'>
                <div className="poser__item">
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
            </swiper-slide>
            <swiper-slide class='poster'>
                <div className="poser__item">
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
            </swiper-slide>
            <swiper-slide class='poster'>
                <div className="poster__item">
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
                                <a className="poster__cta--trailer" href="javascript (void 0)">Trailer</a>
                                <a className="poster__cta--movie" href="javascript (void 0)">Watched?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper-container >
    )
}
