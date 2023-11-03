import React from 'react'
import { Button, ContainerOverview, FlexTitle, Title } from './styles'
import Carousel from '../Carousel/Carousel'

const OverviewDailyServices = () => {
  return (
    <ContainerOverview>
        <FlexTitle>
        <Title>Cultos Matinais</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle >
        <Title>Cultos Vesperais</Title>
        <Button>ver todos</Button>
        </FlexTitle>
      <Carousel />

    </ContainerOverview>
  )
}

export default OverviewDailyServices

