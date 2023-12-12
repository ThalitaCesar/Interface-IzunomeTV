import React from 'react'
import {Layout, Menu} from 'src/components';
import { Container, Text, TextContainer, Title } from './styles';

const AboutUs = () => {

    return (
        <Layout>
            <Menu />
            <Container>
                <TextContainer>
                <Title>Seja bem-vindo(a) à Izunome.tv!</Title>
                <Text>

                    Você está no canal oficial da Igreja Messiânica Mundial do Brasil.<br></br> Aqui, além de
                    transmissões ao vivo, você terá acesso aos nossos conteúdos já gravados que
                    poderão ser apreciados, igualmente de maneira especial, no momento que melhor
                    lhe convier.<br></br> Se possível, deixe a Izunome.tv fazer parte da sua rotina.
                    Diariamente, às 8h30, iniciamos o dia com oração e o finalizamos, às 18 horas,
                    com o sentimento de gratidão.<br></br> Cada vídeo ou transmissão é preparado com muita
                    dedicação e carinho, pois nosso desejo é que eles lhes proporcionem
                    conhecimento, sabedoria e esperança em dias melhores. Certamente, eles farão
                    grande diferença na sua vida, tornando-a cada vez mais feliz. Experimente!<br></br>
                    Meishu-Sama (Mokiti Okada), que é o fundador da nossa religião, acredita na
                    força transformadora do amor altruísta e da gratidão, orientando-nos a pensar
                    primeiramente na felicidade do próximo, para que, merecidamente, possamos ser
                    agraciados com a verdadeira felicidade. Então, com relação aos nossos conteúdos,
                    uma forma de praticar este sentimento de gratidão é curtindo (dando like) em
                    nossas publicações, enquanto que, compartilhá-la nas redes sociais, é também uma
                    maneira simples de praticar o altruísmo ao dividir com outras pessoas essas
                    mesmas mensagens positivas. Por isso, desde já, lhe convidamos a fazer parte
                    deste movimento.<br></br> Para saber mais a respeito das atividades da Igreja Messiânica
                    Mundial do Brasil, acompanhe-nos em nosso site e em nossas redes sociais.
                </Text>
                </TextContainer>
            </Container>
        </Layout>
    );
};
export default AboutUs
