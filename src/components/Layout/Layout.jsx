import React from 'react';
import { ColumnOne, ColumnTwo, HomeContainer } from './styles';
import MenuLateral from '../MenuLateral/MenuLateral';
import Menu from '../Menu/Menu';


const Layout = ({children}) => {
    return (

        <HomeContainer>
            <ColumnOne>
                <MenuLateral/>
            </ColumnOne>
            <ColumnTwo>
                <Menu/>
                {children}
            </ColumnTwo>
        </HomeContainer>

    );
};

export default Layout;
