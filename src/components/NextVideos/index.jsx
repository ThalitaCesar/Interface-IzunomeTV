import React from 'react';
import {Container, FlexCardsNextVideo, TitleSection} from './styles';
import CardNextVideos from './CardNextVideos';
import cultoantepassados from '../../assets/cultoantepassados.png'

const NextVideos = () => {
    const nextsData = [
        {
            videoId: 'ifyrLD8PePE',
            image: cultoantepassados,
            title: 'Culto Mensal de Agradecimento dedicado às Almas dos Antepassados | Solo Sagrado - 02/11/2023'
        },
        {
            videoId: 'WMrVx1HeEyU',
            image: 'https://i.ytimg.com/vi/0bN89DhipQg/maxresdefault.jpg',
            title: 'Culto do Natalício de Meishu-Sama | Solo Sagrado de Guarapiranga - 17/12/2023'
        },

    ]
    return (
        <Container>
            <TitleSection>Em Breve</TitleSection>
            
            <FlexCardsNextVideo>
            {nextsData.slice(0, 2).map((video, index) => (
            <CardNextVideos key={index} video={video} />
            ))}   
            </FlexCardsNextVideo>
        </Container>
    );
}

export default NextVideos;