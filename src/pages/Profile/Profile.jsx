import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container } from './styles';
import TitlePage from '../../components/TitlePage/TitlePage';
import FormProfile from '../../components/FormProfile/FormProfile';

const Profile = () => {

    return (
        <Layout>
        <Container>
        <TitlePage NameTitle='Meu Perfil'/>
        <FormProfile/>    
        </Container>
        </Layout>
    );
};
export default Profile
