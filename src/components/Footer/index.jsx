import React from 'react'
import immb from '../../assets/immb.svg'
import {
    Column,
    Logo,
    FooterContainer,
    FooterLink,
    LinksContainer,
    LowerRow,
    SocialNetworksContainer,
    UpperRow,
    Div
} from './styles'
import {Divider} from 'antd'

const Footer = () => {
    return (
        <Div>
            <FooterContainer>
                <UpperRow>
                    <Logo src={immb}/> {/* <p style={{fontSize: "14px", marginLeft:"45px"}}>A Igreja Messiânica Mundial foi fundada no Japão em 1 de janeiro de 1935, por Mokiti Okada, chamado pelos messiânicos de Meishu-Sama, que, em português significa, "Senhor Da Luz".</p> */}
                </UpperRow>

                <LowerRow>
                    <LinksContainer>
                        <Column>
                            <p className='Footer-title'>Institucional</p>
                            <FooterLink to="/">O que é a Igreja Messiânica</FooterLink>
                            <FooterLink to="/">Nosso Fundador</FooterLink>
                            <FooterLink to="/">Nossa Tragetória</FooterLink>
                            <FooterLink to="/">Nossa Crença</FooterLink>
                            <FooterLink to="/">Nossa Visão</FooterLink>
                            <FooterLink to="/">Solos Sagrados</FooterLink>
                            <FooterLink to="/">Escritos Divinos</FooterLink>
                        </Column>
                        <Column>
                            <p className='Footer-title'>Colunas da Salvação</p>
                            <FooterLink to="/">Johrei</FooterLink>
                            <FooterLink to="/">Agricultura Natural</FooterLink>
                            <FooterLink to="/">Belo</FooterLink>
                            <br></br>

                            <p className='Footer-title'>Endereços</p>
                            <FooterLink to="/">Unidades no Brasil</FooterLink>
                            <FooterLink to="/">Unidades no Exterior</FooterLink>
                            <br></br>

                        </Column>
                        <Column>

                            <p className='Footer-title'>Experiência de Fé</p>
                            <FooterLink to="/">Experiências de fé</FooterLink>
                            <br></br>
                            <p className='Footer-title'>Culto Mensal</p>
                            <FooterLink to="/">Ensinamento</FooterLink>
                            <FooterLink to="/">Experiência</FooterLink>
                            <FooterLink to="/">Palestra</FooterLink>
                            <FooterLink to="/">Agenda</FooterLink>

                        </Column>

                        <Column>
                            <p className='Footer-title'>Notícias</p>
                            <FooterLink to="/">Nossas Notícias</FooterLink>
                            <br></br>

                            <p className='Footer-title'>Atendimento</p>
                            <FooterLink to="/">Fale Conosco</FooterLink>
                            <FooterLink to="/">Perguntas Frequentes</FooterLink>
                            <br></br>
                            <p className='Footer-title'>Termos</p>
                            <FooterLink to="/">Política de Privacidade</FooterLink>
                            <FooterLink to="/">Termos de Uso</FooterLink>

                        </Column>
                    </LinksContainer>
                    <Divider
                        style={{
                        background: '#79ba6e',
                        width: '60vw'
                    }}/>

                    <SocialNetworksContainer>
                        <p
                            style={{
                            fontSize: "14px"
                        }}>@ 2023 Igreja Messiânica Mundial do Brasil. Todos os direitos reservados.</p>
                    </SocialNetworksContainer>
                </LowerRow>
            </FooterContainer>
        </Div>
    )
}

export default Footer
