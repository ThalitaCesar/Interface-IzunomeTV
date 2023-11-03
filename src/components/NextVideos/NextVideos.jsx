import React from 'react';
import {Container, FlexCardsNextVideo, TitleSection} from './styles';
import CardNextVideos from './CardNextVideos/CardNextVideos';

const NextVideos = () => {
    return (
        <Container>
            <TitleSection>Em Breve</TitleSection>
            <FlexCardsNextVideo>
                <CardNextVideos/>
                <CardNextVideos/>
            </FlexCardsNextVideo>
        </Container>
    );
}

export default NextVideos;