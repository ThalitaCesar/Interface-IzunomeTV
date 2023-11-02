import React from 'react'
import Menu from '../../components/Menu/Menu'
import MenuLateral from '../../components/MenuLateral/MenuLateral'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { ColumnOne, ColumnTwo, HomeContainer } from '../Home/styles'
import Page404 from '../../assets/icons/404'
import { NotFoundFlex } from './styles'

const NotFound = () => {
  return (

    <HomeContainer>
      <ColumnOne>
        <MenuLateral/>
      </ColumnOne>
      <ColumnTwo>
        <Menu/>
        <NotFoundFlex>
          <h1>404</h1>
          <p>Página não encontrada. :(
          </p>
        <Page404/>
        </NotFoundFlex>
      </ColumnTwo>
    </HomeContainer>

  )
}

export default NotFound
