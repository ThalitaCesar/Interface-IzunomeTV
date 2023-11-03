import React from 'react';
import { CarouselContainer, CarouselItem } from './styles';


const CardVideoItem = ({ video }) => {
  return (
    <CarouselContainer>
      <CarouselItem backgroundUrl={video.url_image} alt={video.title} />
      <p className='item-name'>{video.title}</p>
    </CarouselContainer>
  );
};


export default CardVideoItem;
