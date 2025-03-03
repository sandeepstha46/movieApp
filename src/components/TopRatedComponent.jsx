import React, {useState} from 'react'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';


import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {topRatedMovies} from "../util/themovieApi";


register();

export default function TopRatedComponent() {
  const swiperElRef = useRef(null);

  useEffect(() => {
   if(swiperElRef.current){
     // listen for Swiper events using addEventListener
     swiperElRef.current.addEventListener('progress', (e) => {
       const [swiper, progress] = e.detail;
     });

     swiperElRef.current.addEventListener('slidechange', (e) => {
     });
   }
  }, []);


  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await topRatedMovies();
        setTopRated(data.results);
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
      <swiper-container
          ref={swiperElRef}
          slides-per-view="5"
          space-between='24'
          autoplay-delay='5000'
          class="topRated"
      >
        {topRated.map((data) => (
            <swiper-slide className='poster_tr'>
              <a href="#">
                <img className="poster__tr--image" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt=""/>
              </a>
            </swiper-slide>
        ))}
      </swiper-container>
  )
}
