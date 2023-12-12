import React from 'react';
import {ColumnOne, ColumnTwo, HomeContainer} from './styles';
import {MenuLateral} from '../index';

const Layout = ({children}) => {

    return (
        <HomeContainer>
            <ColumnOne>
                <MenuLateral/>
            </ColumnOne>
            <ColumnTwo>
             {children}
            </ColumnTwo>
        </HomeContainer>
    );
};

export default Layout;
