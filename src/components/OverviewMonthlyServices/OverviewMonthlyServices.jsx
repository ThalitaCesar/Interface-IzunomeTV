import React from 'react'
import { Button, ContainerOverview, FlexTitle, Title } from './styles'
import Carousel from '../Carousel/Carousel'
import { useNavigate } from 'react-router-dom'

const OverviewMonthlyServices = () => {
  const navigate = useNavigate()
  return (
    <ContainerOverview>
        <FlexTitle>
        <Title>Palestras</Title>
        <Button onClick={() => navigate('/category')}>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Experiências de Fé</Title>
        <Button onClick={() => navigate('/category')}>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Cerimônias</Title>
        <Button onClick={() => navigate('/category')}>ver todos</Button>
        </FlexTitle>
      <Carousel/>

      <FlexTitle>
        <Title>Videoclips</Title>
        <Button onClick={() => navigate('/category')}>ver todos</Button>
        </FlexTitle>
      <Carousel/>

     
    </ContainerOverview>
  )
}

export default OverviewMonthlyServices
