import React from 'react';
import {
    Wrapper,
    LeftSection,
    RightSection,
    BackgroundImage,
    Content,
    Form,
    FormInput,
    FormButton,
    SocialIcons,
    Logo,
    SocialIconsContainer,
    LinkIcon
} from './styles';
import {Link, useNavigate} from 'react-router-dom/dist';
import logo from '../../assets/logo.png'
import { FaPrayingHands } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

const SignIn = () => {
    const isMobile = window.innerWidth < 768;
    const navigate = useNavigate()
    return (
        <Wrapper>
            <LeftSection>
                <BackgroundImage
                    backgroundUrl='https://th.bing.com/th/id/R.dfe004ef5d23ebe6e3231525b663487b?rik=TrZRusXGBHmf%2bw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-daUlsvw2rPg%2fU8xqNAFYMrI%2fAAAAAAAAAKQ%2feEOh17tu6Hg%2fs1600%2fGEDC0600.JPG&ehk=sRbZe%2ftK7YzRsFarVpRNj08H0GJqYDenRBQcLjZvvso%3d&risl=&pid=ImgRaw&r=0'>
                    <Content>
                        <h1>Bem-vindo ao Izunome TV,</h1>
                        <p>O canal oficial da Igreja Messiânica Mundial do Brasil, onde oferecemos
                            transmissões ao vivo e conteúdos especiais para iluminar o seu dia com sabedoria
                            e esperança.</p>
                    </Content>
                    <SocialIconsContainer>
                        <LinkIcon
                            href="https://www.messianica.org.br/home"
                            target="_blank">
                            <BiWorld
                                size={isMobile
                                ? 21
                                : 29}/></LinkIcon>
            
                        <LinkIcon href="https://www.facebook.com/messianica" target="_blank">
                            <BsFacebook
                                size={isMobile
                                ? 18
                                : 24}/></LinkIcon>
                        <LinkIcon
                            href="https://www.youtube.com/igrejamessianicamundialdobrasil"
                            target="_blank">
                            <BsYoutube
                                size={isMobile
                                ? 18
                                : 24}/></LinkIcon>
                        <LinkIcon href="https://www.instagram.com/izunome.tv/" target="_blank">
                            <BsInstagram
                                size={isMobile
                                ? 18
                                : 24}/></LinkIcon>
                    </SocialIconsContainer>
                </BackgroundImage>
            </LeftSection>
            <RightSection>
                <Link to='/'>
                    <Logo src={logo} alt="Logo"/>
                </Link>
                <SocialIcons>
                    <span>f</span>
                    <span>G+</span>
                    <span>in</span>
                </SocialIcons>
                <p>ou utilize o email para a sua conta</p>
                <Form>
                    <FormInput type="email" name="email" id="email" placeholder="Email"/>
                    <FormInput
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"/>
                    <FormButton type="submit" onClick={() => navigate('/')}>Sign In</FormButton>
                </Form>

            </RightSection>
        </Wrapper>
    );
};

export default SignIn;
