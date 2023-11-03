import React from 'react'
import Carousel from '../Carousel/Carousel'
import { Button, ContainerOverview, FlexTitle, Title } from './styles'

const OverviewProgramme = () => {
  return (
    <ContainerOverview>
        <FlexTitle>
        <Title>Eu Caminho com Meishu Sama</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Novidades</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Documentários</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Eventos Artísticos</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Atividades nas Unidades</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Horta Caseira</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>
    </ContainerOverview>
  )
}

export default OverviewProgramme
