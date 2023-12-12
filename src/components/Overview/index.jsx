import React from 'react'
import {Button, ContainerOverview, FlexTitle, Title} from './styles'
import { useNavigate } from 'react-router-dom'
import { Carousel } from '..'

const Overview = () => {
    const navigate = useNavigate()
    return (
        <ContainerOverview>
            <FlexTitle>
                <Title>Novidades</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel category={'news'}/>

            <FlexTitle>
                <Title>Eu Caminho com Meishu Sama</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel category={'eu_caminho'}/>

            <FlexTitle>
                <Title>Cultos Matinais</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel category={'culto_matinal'}/>

            <FlexTitle>
                <Title>Cultos Vesperais</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel category={'culto_vesperal'}/>

            <FlexTitle>
                <Title>Cultos Mensais Solo Sagrado</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel  category={'culto_solo'}/>
        </ContainerOverview>
    )
}

export default Overview
