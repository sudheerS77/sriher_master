import React from "react";
import LeftArrow from "./assets/left-arrow.svg";
import RightArrow from "./assets/right-arrow.svg";

export const NextArrows = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="PrevArrow" {...props} style={{}} />
    );
export const PrevArrows = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="PrevArrow" {...props} />
    );


    // background: "rgba( 255, 255, 255, 0.8 )", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",opacity: "50px", borderRadius: "100%", marginRight: "25px", padding: "2px", width: "35px", height: "35px" 