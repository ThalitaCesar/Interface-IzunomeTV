
import React from 'react';
import { Card, Content, Title } from '../styles';
import { ButtonGroup, ButtonWatch } from '../../SliderLive/styles';

const CardNextVideos = ({ video }) => {
  return (
    <Card backgroundImage={video.image}>
      <Content>
        <div>
          <Title>{video.title}</Title>
          <ButtonGroup>
            <ButtonWatch style={{ width: '170px' }}>
              <span className='icon-plus' style={{ marginRight: '4px', fontSize: '20px' }} /> Minha Lista
            </ButtonWatch>
          </ButtonGroup>
        </div>
      </Content>
    </Card>
  );
};

export default CardNextVideos;
