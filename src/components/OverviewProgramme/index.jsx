import React from 'react'
import { Carousel } from '..'
import {Button, ContainerOverview, FlexTitle, Title} from './styles'
import {useNavigate} from 'react-router-dom'

const OverviewProgramme = () => {
    const navigate = useNavigate()
    return (
        <ContainerOverview>
            <FlexTitle>
                <Title>Eu Caminho com Meishu Sama</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
            <FlexTitle>
                <Title>Novidades</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
            <FlexTitle>
                <Title>Documentários</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
            <FlexTitle>
                <Title>Eventos Artísticos</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
            <FlexTitle>
                <Title>Atividades nas Unidades</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
            <FlexTitle>
                <Title>Horta Caseira</Title>
                <Button onClick={() => navigate('/category')}>ver todos</Button>
            </FlexTitle>
            <Carousel/>
        </ContainerOverview>
    )
}

export default OverviewProgramme
