import React from 'react'
import Container, {
    ContainerComments,
    Input,
    Item,
    ProfileImage,
    Timestamp,
    UserComment,
    UserCommentFlex,
    UserHeader,
    UserInfo,
    UserName,
    UserText
} from './styles';
import user2 from '../../assets/user2.jpg'
import user from '../../assets/user.jpg'
import user3 from '../../assets/user3.jpg'
const Comments = () => {

    return (
        <Container>
            <UserCommentFlex>
                <UserComment>
                    <UserInfo>
                        <ProfileImage src={user} alt=""/>
                    </UserInfo>
                    <Input type='text' placeholder='Adicione um comentário'/>
                </UserComment>

                <div className="icons">
                    <div className='icon'>
                        <span className='icon-emotsmile'/>
                    </div>
                    <div className='icon' style={{width:'120px'}}>
                        comentar
                    </div>
                </div>
            </UserCommentFlex>
            < ContainerComments >
                <Item>
                    <UserHeader>
                        <UserInfo>
                            <ProfileImage src={user2} alt=""/>
                            <UserName>Joana Dantas</UserName>
                        </UserInfo>
                        <Timestamp>há 14 minutos</Timestamp>
                    </UserHeader>
                    <UserText>
                        Gratidão a Deus e Meishu-Sama pelas bênçãos e proteção concedida à mim e minha
                        família!!! GRATIDÃO AOS NOSSOS ANTEPASSADOS !!!
                    </UserText>
                </Item>
                < Item >
                    <UserHeader>
                        <UserInfo>
                            <ProfileImage src={user3} alt=""/>
                            <UserName>Paulo Silva</UserName>
                        </UserInfo>
                        <Timestamp>há 20 minutos</Timestamp>
                    </UserHeader>
                    < UserText >
                        Bom dia presidente !Um abraço de toda a família de Terezina, Piaui. &#128512;
                    </UserText>
                </Item >
            </ContainerComments >
        </Container>
    )
}

export default Comments
