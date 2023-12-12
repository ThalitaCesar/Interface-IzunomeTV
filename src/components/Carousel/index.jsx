import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Videos from '../../pages/Home/Mock';
import {  MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';
import { CardVideoItem } from '..';

const Carousel = ({category}) => {

  const [videos, setVideos] = useState(Videos);
  const filterAndSortVideos = () => {
    if (category === 'news') {
      return videos.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      return videos.filter(video => video.category === category);
    }
  };

  console.log('Videos:', Videos);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowForwardIos
        className={className}
        style={{ ...style, display: "block", color: "var(--blue)" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <MdOutlineArrowBackIosNew
        className={className}
        style={{ ...style, display: "block", color: "var(--blue)" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4.2,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2.5,
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
            slidesToShow: 1.1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // infinite: true,
            dots: false,
          },
        },
      ],
    };

  return (

    <Slider {...settings}>
      {filterAndSortVideos().map((video) => (
        <CardVideoItem key={video.id} video={video} />
      ))}
  </Slider>
  )
}

export default Carousel
