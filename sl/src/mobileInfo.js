import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from './resources/Img1.png';

function SlideShow() {
  const images = [Img1, Img1, Img1, Img1, Img1, Img1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of images to display at once
    slidesToScroll: 1, // Number of images to scroll when arrows are clicked
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Display the center image as the primary image
    centerPadding: "40px", // Add padding to the sides of the images
    cssEase: 'linear'
  };

  const imgStyle = {
    boxShadow: "0 0 20px 5px #1FAB89", // Increase the spread radius to 5px and the shadow size to 20px
    width: "80%", // Reduce the width of the images to make them smaller
    height: "auto",
    margin: "20px 10px", // Add 20px top and bottom margin
    borderRadius: "100px"
  };
  
  
  

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={imgStyle} className={index === 1 ? "slick-center" : ""} />
        </div>
      ))}
    </Slider>
  );
}

export default SlideShow;
