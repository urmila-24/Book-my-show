import React, { useState,useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Arrow components
import { NextArrow, PrevArrow } from "./Arrows.Component";


 const HeroCarousel =() => {
     const  [image,setImage] =useState ([]);

     useEffect(() => {
        const requestNowPlayingMovies = async () =>{
            const getImages = await axios.get('/movie/now_playing');
            setImage(getImages.data.results);
        }
         requestNowPlayingMovies();
     }, []);

     return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {image.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-center "
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {image.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-center"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );

 }
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
   
    };

    
export default HeroCarousel;
