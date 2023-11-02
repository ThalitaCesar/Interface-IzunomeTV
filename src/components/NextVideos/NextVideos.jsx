import React from 'react';
import {Container, FlexCardsNextVideo} from './styles';
import {Title} from '../../pages/Home/Overview/styles';
import CardNextVideos from './CardNextVideos/CardNextVideos';

const NextVideos = () => {
    return (
        <Container>
            <Title>Em Breve</Title>
            <FlexCardsNextVideo>
                <CardNextVideos/>
                <CardNextVideos/>
            </FlexCardsNextVideo>
        </Container>
    );
}

export default NextVideos;