import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { Button, ContainerOverview, FlexTitle, Title } from './styles'

const OverviewMonthlyServices = () => {
  return (
    <ContainerOverview>
        <FlexTitle>
        <Title>Palestras</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Experiências de Fé</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Cerimônias</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Videoclips</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

     
    </ContainerOverview>
  )
}

export default OverviewMonthlyServices
