import React from 'react'
import Container, { CloseButton, ContainerNotifications, Header, Info, Item, Text, Title } from './styles';

const CardNotifications = () => {

    return (
        <Container>
            <ContainerNotifications >
                <Item>
                    <Header>
                        <Info>
                            <Title>Atualize Suas Preferências de Conteúdo</Title>
                        </Info>
                        <CloseButton>X</CloseButton>
                    </Header>
                    <Text>
                        Olá! Queremos garantir que você tenha a melhor experiência de streaming. Acesse
                        suas configurações para personalizar suas preferências de conteúdo, como gêneros
                        favoritos e notificações personalizadas. Clique aqui para atualizar agora.
                    </Text>
                </Item>
                < Item >
                    <Header>
                        <Info>
                            <Title>Ajuste Sua Reprodução Automática</Title>
                        </Info>
                        <CloseButton>X</CloseButton>
                    </Header>
                    < Text >
                        Prezado usuário, você tem o controle total da reprodução automática. Vá para as
                        configurações para definir suas preferências de reprodução automática, incluindo
                        a reprodução automática do próximo episódio e a qualidade do vídeo. Personalize
                        sua experiência agora.
                    </Text>
                </Item >
            </ContainerNotifications>
        </Container>
    )
}

export default CardNotifications
