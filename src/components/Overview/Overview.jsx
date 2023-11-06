import React from 'react'
import {Button, ContainerOverview, FlexTitle, Title} from './styles'
import Carousel from '../Carousel/Carousel'
import { useNavigate } from 'react-router-dom'

const Overview = () => {
    const navigate = useNavigate()
    return (
        <ContainerOverview>
            <FlexTitle>
                <Title>Novidades</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>

            <FlexTitle>
                <Title>Eu Caminho com Meishu Sama</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>

            <FlexTitle>
                <Title>Cultos Matinais</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>

            <FlexTitle>
                <Title>Cultos Vesperais</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>

            <FlexTitle>
                <Title>Cultos Mensais Solo Sagrado</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
        </ContainerOverview>
    )
}

export default Overview
