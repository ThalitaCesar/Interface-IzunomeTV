import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { Button, ContainerOverview, FlexTitle, Title } from './styles'

const Overview = () => {
  return (
    <ContainerOverview>
        <FlexTitle>
        <Title>Novidades</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Eu Caminho com Meishu Sama</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Cultos Matinais</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Cultos Vesperais</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Cultos Mensais Solo Sagrado</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>
    </ContainerOverview>
  )
}

export default Overview
