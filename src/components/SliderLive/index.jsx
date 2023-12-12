import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, ButtonWatch, Container, Content, Text, Title, TitleInfo, VideoContainer } from './styles';
import { Divider } from 'antd';
import { ButtonLive, Menu } from '..';

const SliderLive = () => {
  const [more, setMore] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/player/gmP2eb5gqvI&t=35s");
  };

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('backgroundVideo', {
        videoId: 'gmP2eb5gqvI',
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          mute: 1,
          start: 35,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  return (
<>
    
      {!more ? (
      <Container>
      <Menu />
      <VideoContainer
        title="YouTube Video"
        src="https://www.youtube.com/embed/gmP2eb5gqvI?start=35&autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1"
        frameBorder="0"
        allowFullScreen
      ></VideoContainer>
      <Content>
        <ButtonLive/>
        <div>
          <Title>Culto Mensal de Agradecimento de fevereiro | Sede Central - 07/02/2023</Title>
          <ButtonGroup>
            <ButtonWatch onClick={handleClick}>
              <p>Assistir</p>
              <span className="icon-control-play" style={{ marginLeft: '7px', fontSize: '20px' }} />
            </ButtonWatch>
            <ButtonWatch
              style={{ background: 'rgba(85, 104, 160, 0.4)' }}
              onClick={() => setMore(true)}
            >
              <span style={{ fontSize: '20px' }} className="icon-info" />
            </ButtonWatch>
          </ButtonGroup>
        </div>
      </Content>
      </Container>
      ): (
        <Container style={{background:'none'}}>
          <Menu />
        <Content>
          <ButtonWatch style={{ width: '70px' }} onClick={() => setMore(false)}>
            <span className="icon-arrow-left" />
          </ButtonWatch>
          <TitleInfo>Transmissões ao vivo </TitleInfo>
          <Divider style={{ background: 'var(--medium-gray)' }} />
          <div>
            <Text>
              <div>
                <b>Cultos Diários:</b>
                <br></br>Às 8h30 e às 18 horas
                <br></br>(início da transmissão: 30 minutos antes)
                <br></br>
                <b>Cultos Maitokasai:</b>
                <br></br>Todos os meses, nos dias, 05, 15 e 25 às 11 horas
                <br></br>(início da transmissão: 30 minutos antes)
                <br></br>
              </div>
              <div>
                <b>Cultos Mensais no Solo Sagrado:</b>
                <br></br>No primeiro domingo* de cada mês, às 9 horas
                <br></br>(início da transmissão: 1 hora antes)
                <br></br>
                <b>Cultos Mensais na Sede Central:</b>
                <br></br>Na terça-feira posterior ao Culto do Solo Sagrado, às 8h30
                <br></br>(início da transmissão: 30 minutos antes)
              </div>
            </Text>
          </div>
        </Content>
        </Container>
      )}
    
    </>
  );
};

export default SliderLive;
