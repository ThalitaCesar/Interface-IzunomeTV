import React from 'react'
import {Button, ContainerOverview, FlexTitle, Title} from './styles'
import { Carousel } from '..'
import {useNavigate} from 'react-router-dom'

const OverviewDailyServices = () => {
    const navigate = useNavigate()
    return (
        <ContainerOverview>
            <FlexTitle>
                <Title>Cultos Matinais</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
            <FlexTitle >
                <Title>Cultos Vesperais</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
        </ContainerOverview>
    )
}

export default OverviewDailyServices
