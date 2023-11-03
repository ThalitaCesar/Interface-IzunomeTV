import React from 'react'
import {SlideLive} from '../../components/SliderLive/SlideLive'
import Overview from '../../components/Overview/Overview'
import NextVideos from '../../components/NextVideos/NextVideos'
import Layout from '../../components/Layout/Layout'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <Layout>
            <SlideLive/>
            <NextVideos/>
            <Overview/>
            <Footer/>
        </Layout>
    )
}

export default Home
