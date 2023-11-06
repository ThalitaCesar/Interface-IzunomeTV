import React from 'react';
import { CarouselContainer, CarouselItem } from './styles';
import { useNavigate } from 'react-router-dom';


const CardVideoItem = ({ video }) => {
  const navigate = useNavigate()
  return (
    <CarouselContainer onClick={() => navigate('/player')}>
      <CarouselItem backgroundUrl={video.url_image} alt={video.title} />
      <p className='item-name'>{video.title}</p>
    </CarouselContainer>
  );
};


export default CardVideoItem;
