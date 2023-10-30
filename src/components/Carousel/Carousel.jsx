import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Videos from '../../pages/Home/Mock';
import { CarouselContainer, CarouselItem } from './styles';
import {  MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineDoubleArrow } from 'react-icons/md';

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
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };

console.log(videos)
  return (

    <Slider {...settings}>
    {videos.map((video) => (
       <CarouselContainer key={video.id}>
       <CarouselItem backgroundUrl={video.url_image}/>
        <p className='item-name'>{video.title}</p>
     </CarouselContainer>
        ))}
    </Slider>
  )
}

export default Carousel
