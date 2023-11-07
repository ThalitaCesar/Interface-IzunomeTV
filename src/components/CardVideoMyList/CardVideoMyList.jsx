import React from 'react';
import {CarouselContainer, CarouselItem} from './styles';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

const CardVideoMyList = ({video}) => {
    const navigate = useNavigate()
    return (
        <CarouselContainer >
            <CarouselItem backgroundUrl={video.url_image} alt={video.title}/>
            <p className='item-name' onClick={() => navigate('/player')}>{video.title}</p>
            <div className="icons">
              <Tooltip title="Excluir video da minha lista">
            <div className='icon'>
                <span className='icon-trash'/>
            </div>
            </Tooltip>
            </div>
        </CarouselContainer>
    );
};

export default CardVideoMyList;
