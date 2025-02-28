import React from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';


import 'swiper/css/pagination';
import 'swiper/css/navigation';


register();

export default function TopRatedComponent() {
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
      slides-per-view="5"
      space-between='30'
      autoplay-delay='5000'
      class="topRated"
    >
      <swiper-slide class='poster_tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-g.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide class='poster__tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-h.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide class='poster__tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-i.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide class='poster__tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-j.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide class='poster__tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-k.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide class='poster__tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-l.jpg" alt="" />
        </a>
      </swiper-slide>
      <swiper-slide class='poster__tr'>
        <a href="#">
          <img className="poster__tr--image" src="/img/posters/posters-m.jpg" alt="" />
        </a>
      </swiper-slide>

    </swiper-container >
  )
}
