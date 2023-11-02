import React from 'react'
import {SlideLive} from '../../components/SliderLive/SlideLive'
import Menu from '../../components/Menu/Menu'
import MenuLateral from '../../components/MenuLateral/MenuLateral'
import {ColumnOne, ColumnTwo, HomeContainer} from './styles'
import Overview from './Overview/Overview'
import Footer from '../../components/Footer/Footer'
import NextVideos from '../../components/NextVideos/NextVideos'


const Home = () => {
    return (
        <HomeContainer>
            <ColumnOne>
                <MenuLateral/>
            </ColumnOne>
            <ColumnTwo>
                <Menu/>
                <SlideLive/>
                <NextVideos/>
                <Overview/>
                <Footer/>
            </ColumnTwo>
        </HomeContainer>

    )
}

export default Home
