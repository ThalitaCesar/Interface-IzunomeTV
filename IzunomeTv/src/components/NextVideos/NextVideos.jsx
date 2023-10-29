import React from 'react';
 import { Container } from './styles';
import { Title } from '../../pages/Home/Overview/styles';
import CardNextVideos from './CardNextVideos/CardNextVideos';

const NextVideos = () => {
  return (
    <Container>
    <Title style={{color: 'var(--light-gray)'}}>Em Breve</Title>

    <CardNextVideos/>
    </Container>
  );
}

export default NextVideos;