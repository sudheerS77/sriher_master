import React, { useState } from 'react'
import Slider from 'react-slick';
import { Link } from "react-router-dom";

//components
import FacultyCarousal from "./faculty.Carousal";
import { NextArrows, PrevArrows } from "../CarousalArrows";

const Faculty = () => {
    const [facult, setFaculty] = useState([
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/988062348_thamizh%20sir.jpg",
            name: "DR.H.THAMIZHCHELVAN",
            deg: "MDS",
            position: "Professor & HOD",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1333365530__VKP9640-min.jpg",
            name: "DR.N.MALATHI",
            deg: "MDS",
            position: "Professor",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/799633496__VKP9623-min.jpg",
            name: "DR.SHARADA.T.RAJAN",
            deg: "MDS",
            position: "Associate Professor",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/275821210__VKP9664%20(1)-min.jpg",
            name: "DR.R.VIDHYA",
            deg: "MDS",
            position: "Senior Lecturer",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1706041688_suganya1.jpg",
            name: "DR.S.VIJAYANIRMALA",
            deg: "MDS",
            position: "Senior Lecturer",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/453276797__VKP9653-min.jpg",
            name: "DR. R. SUGANYA",
            deg: "MDS",
            position: "Senior Lecturer",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1929621741__VKP9660-min.jpg",
            name: "DR VANDANA.S",
            deg: "MDS",
            position: "Senior Lecturer",
        },
        {
            image: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1567145059__VKP9667-min.jpg",
            name: "DR.S.MYTHILI",
            deg: "MDS",
            position: "Senior Lecturer",
        },
    ]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,    
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows />,            
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,                         
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              nextArrow: <NextArrows />,
              prevArrow: <PrevArrows />, 
            }
          },
          {
            breakpoint: 480,
            settings: {            
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: <NextArrows />,
              prevArrow: <PrevArrows />, 
            }
          }
        ]
      };
  return (
    <>
        <div className="py-10">
          <div className="flex flex-row items-center justify-between mx-8 md:mx-40 pb-8">
            <h1 className="text-2xl md:font-3xl font-semibold md:font-bold pl-3">Faculty</h1>
            <a href="./allfaculty"><p className="text-xs md:text-sm font-light"></p></a>
          </div>
          <div className="w-80 md:w-auto lg:mx-40">
              <Slider {...settings}>
                  {
                      facult.map((data) => (
                          <FacultyCarousal {...data} />
                      ))
                  }
              </Slider>
          </div>
        </div>
    </>
  )
}

export default Faculty