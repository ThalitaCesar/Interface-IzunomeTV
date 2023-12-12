import React from 'react'
import { Container } from './styles';
import {FormProfile, Layout, Menu, TitlePage} from 'src/components';

const Profile = () => {

    return (
        <Layout>
            <Menu />
        <Container>
        <TitlePage NameTitle='Meu Perfil'/>
        <FormProfile/>    
        </Container>
        </Layout>
    );
};
export default Profile
