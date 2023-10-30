import React from 'react'
import {SlideLive } from '../../components/SliderLive/SlideLive'
import Menu from '../../components/Menu/Menu'
import MenuLateral from '../../components/MenuLateral/MenuLateral'
import { ColumnOne, ColumnTwo, HomeContainer } from './styles'
import Overview from './Overview/Overview'
import Footer from '../../components/Footer/Footer'
import NextVideos from '../../components/NextVideos/NextVideos'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'

const Home = () => {
  return (
    <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
            once: false,
            amount: 0.25
        }}>
    <HomeContainer>
      <ColumnOne>
        <MenuLateral/>
      </ColumnOne>
      <ColumnTwo>
        <Menu/>
        <motion.div
                variants={fadeIn('down', 'tween', 1.2, 1.2)}
                initial="hidden"
                whileInView="show">
        <SlideLive/>
        </motion.div>
        <motion.div
                variants={fadeIn('right', 'tween', 1.2, 1.2)}
                initial="hidden"
                whileInView="show">
        <NextVideos/>
        </motion.div>
        <motion.div
                variants={fadeIn('left', 'tween', 1.2, 1.2)}
                initial="hidden"
                whileInView="show">
        <Overview/>
        </motion.div>
        <motion.div
                variants={fadeIn('right', 'tween', 1.2, 1.2)}
                initial="hidden"
                whileInView="show">
        <Footer/>
        </motion.div>
      </ColumnTwo>
    </HomeContainer>
    </motion.div>
  )
}

export default Home
