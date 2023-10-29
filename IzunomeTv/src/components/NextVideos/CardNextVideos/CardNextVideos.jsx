import React from 'react';
import {Card} from '../styles';
import cultoantepassados from '../../../assets/cultoantepassados.png'
import concerto from '../../../assets/slider/concerto.png'
import { ButtonGroup, ButtonWatch, Content, Title } from '../../SliderLive/styles';
import { MdAdd } from 'react-icons/md';
import { BiPlay } from 'react-icons/bi';

const CardNextVideos = () => {
    return ( 
    <div style={{display:'flex', marginBottom:'60px'}}> 
    <Card backgroundImage={cultoantepassados}>
    <Content style={{height:'298px', justifyContent:'end'}}>
      <div>
      <Title style={{fontSize:'16px'}}>Culto Mensal de Agradecimento dedicado às Almas dos Antepassados | Solo Sagrado - 02/11/2023</Title>
      <ButtonGroup>
      <ButtonWatch style={{width:'180px'}}>
        <MdAdd size={25}/> Minha Lista
      </ButtonWatch>
      </ButtonGroup>
      </div>
      </Content>    
    </Card> 
    <Card backgroundImage = {concerto} > 
    <Content style={{height:'298px', justifyContent:'end'}}>
      <div>
      <Title style={{fontSize:'16px'}}>Culto Vesperal (JC Casa Verde/SP) | "As diversas situações após a morte" (1ª parte) - 26/10/2023</Title>
      <ButtonGroup>
      <ButtonWatch style={{width:'180px'}}>
        <MdAdd size={25}/> Minha Lista
      </ButtonWatch>
      </ButtonGroup>
      </div>
      </Content> 
    </Card> 
    </div>
  );
}

export default CardNextVideos;