import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import { Button, ContainerOverview, FlexTitle, Title } from './styles'

const OverviewDailyServices = () => {
  return (
    <ContainerOverview>
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

    </ContainerOverview>
  )
}

export default OverviewDailyServices

