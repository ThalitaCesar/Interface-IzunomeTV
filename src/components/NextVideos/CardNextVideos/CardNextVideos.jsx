import React from 'react';
import {Card, Content, Title} from '../styles';
import cultoantepassados from '../../../assets/cultoantepassados.png'
import concerto from '../../../assets/slider/concerto.png'
import { ButtonGroup, ButtonWatch} from '../../SliderLive/styles';


const CardNextVideos = () => {
    return ( 
    <Card backgroundImage={cultoantepassados}>
    <Content>
      <div>
      <Title>Culto Mensal de Agradecimento dedicado às Almas dos Antepassados | Solo Sagrado - 02/11/2023</Title>
      <ButtonGroup>
      <ButtonWatch style={{width:'170px'}}>
      <span className='icon-plus' style={{marginRight:'4px', fontSize:'20px'}}/> Minha Lista
      </ButtonWatch>
      </ButtonGroup>
      </div>
      </Content>    
    </Card> 
  );
}

export default CardNextVideos;