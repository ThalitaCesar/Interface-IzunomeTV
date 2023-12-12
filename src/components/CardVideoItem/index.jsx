import React from 'react';
import {CarouselContainer, CarouselItem} from './styles';
import {useNavigate} from 'react-router-dom';

const CardVideoItem = ({video}) => {

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        }
        return text;
      };

    const navigate = useNavigate()
    return (
        <CarouselContainer onClick={() => navigate(`/player/${video.url}`)}>
            <CarouselItem backgroundUrl={video.url_image} alt={video.title}/>
            <p className='item-name'>{truncateText(video.title, 77)}</p>
        </CarouselContainer>
    );
};

export default CardVideoItem;
