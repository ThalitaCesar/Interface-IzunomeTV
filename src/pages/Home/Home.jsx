import React from 'react'
import {Layout, Footer, NextVideos, Overview, SliderLive } from 'src/components'

const Home = () => {
    return (
        <Layout>
            <SliderLive/>
            <NextVideos/>
            <Overview/>
            <Footer/>
        </Layout>
    )
}

export default Home
