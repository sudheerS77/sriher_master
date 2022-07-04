import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";


//Components
import { NextArrows, PrevArrows } from '../CarousalArrows';
import { LGImageCarousal, SMImageCarousal } from './ImageCarousal';

//Redux action
import { getSlider } from '../../Redux/Reducer/Slider/slider.action';

const HeroCarousals = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      autoplay: true,
      fade: true,
      pauseOnHover: true,
      speed: 400,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    const [sliderImages, setSliderImages] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.Slider);

    useEffect(() => {
      reduxState?.slider && setSliderImages(reduxState.slider.data);
    }, [reduxState]);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSlider());
    }, []);

    console.log(sliderImages);

    return (
      <>
        <div className="hidden lg:block md:mt-0 md:mx-6 md:px-4 ml-2.5">
          <Slider {...settings}>
            {sliderImages?.map((data) => (
              <div className="md:px-0.5">
                <LGImageCarousal image={data.image} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="h-full lg:hidden">
          <Slider {...settings}>
            {sliderImages?.map((data) => (
              <div>
                <SMImageCarousal image={data.image} />
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
}
export default HeroCarousals