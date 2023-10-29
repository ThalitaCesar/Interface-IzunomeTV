import React, { useState } from 'react'
import { BiArrowBack, BiPlay } from 'react-icons/bi'
import { BsBack, BsBackspace } from 'react-icons/bs'
import { MdAdd } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ButtonLive from '../ButtonLive/ButtonLive'
import { ButtonGroup, ButtonWatch, Container, Content, Text, Title, TitleInfo } from './styles'


export const SlideLive = () => {
  

  const [more, setMore] = useState(false)
  
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/player");
  }

  console.log('more', more)
    return (
      <>
    {!more? (
      <Container backgroundUrl='src/assets/slider/solo.png'>
      <Content>
      <ButtonLive/>
      <div>
      <Title>Culto Mensal de Agradecimento de fevereiro | Sede Central - 07/02/2023</Title>
      <ButtonGroup>
      <ButtonWatch onClick={handleClick}>
        <p>Assistir</p>
        <BiPlay size={25}/>
      </ButtonWatch>
      <ButtonWatch style={{background: 'rgba(85, 104, 160, 0.4)'}}
      onClick={()=> {setMore(true)}}>
        <MdAdd size={25}/>
      </ButtonWatch>
      </ButtonGroup>
      </div>
      </Content>    
     </Container>

    ):null}
    {more? (
      <Container style={{background:"var(--medium-gray)"}}>
      <Content>
      <TitleInfo>Transmissões ao vivo </TitleInfo>
      <Text>
        <div>
      <b>Cultos Diários:</b><br></br>
      Às 8h30 e às 18 horas<br></br>
      (início da transmissão: 30 minutos antes)<br></br>
      <b>Cultos Maitokasai:</b><br></br>
      Todos os meses, nos dias, 05, 15 e 25 às 11 horas<br></br>
      (início da transmissão: 30 minutos antes)<br></br>
      </div>
      <div>
      <b>Cultos Mensais no Solo Sagrado:</b><br></br>
      No primeiro domingo* de cada mês, às 9 horas<br></br>
      (início da transmissão: 1 hora antes)<br></br>
      <b>Cultos Mensais na Sede Central:</b><br></br>
      Na terça-feira posterior ao Culto do Solo Sagrado, às 8h30<br></br>
      (início da transmissão: 30 minutos antes)
      </div>
      </Text>
      <ButtonWatch style={{background: 'rgba(85, 104, 160, 0.4)', width:'70px'}}
      onClick={() => setMore(false)}>
      <BiArrowBack size={25}/>
      </ButtonWatch>
      </Content>    
     </Container>
    ):null}

 </>
)
}
