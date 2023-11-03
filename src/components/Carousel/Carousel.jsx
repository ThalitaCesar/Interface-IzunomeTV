import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Videos from '../../pages/Home/Mock';
import {  MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineDoubleArrow } from 'react-icons/md';
import CardVideoItem from '../CardVideoItem/CardVideoItem';

const Carousel = () => {

  const [videos, setVideos] = useState(Videos)

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowForwardIos
        className={className}
        style={{ ...style, display: "block", color: "var(--blue)" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowBackIosNew
      className={className}
      style={{ ...style, display: "block", color: "var(--blue)" }}
      onClick={onClick}
    />
    );
  }

  var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };

  return (

    <Slider {...settings}>
    {videos.map((video) => (
       <CardVideoItem key={video.id} video={video} />
        ))}
    </Slider>
  )
}

export default Carousel
