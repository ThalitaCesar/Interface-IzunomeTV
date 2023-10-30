import React from "react";
import '@vime/core/themes/default.css';
import {ColumnOneVideo, ColumnTwoVideos, Container} from "./styles";
import {ColumnOne, ColumnTwo, HomeContainer} from "../Home/styles";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import Menu from "../../components/Menu/Menu";
import VerticalList from "../../components/VerticalList/VerticalList";
import Comments from "../../components/Comments/Comments";
import PlayerVideo from "../../components/PlayerVideo/Player";
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer} from '../../utils/motion'

const Player = () => {

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

                    <Container>
                        <ColumnOneVideo>
                            <motion.div
                                variants={fadeIn('down', 'tween', 1.2, 1.2)}
                                initial="hidden"
                                whileInView="show">
                                <PlayerVideo/>
                                </motion.div>

                                <motion.div
                                variants={fadeIn('right', 'tween', 1.2, 1.2)}
                                initial="hidden"
                                whileInView="show">
                            <Comments/>
                            </motion.div>
                            
                        </ColumnOneVideo>
                        <ColumnTwoVideos>
                        <motion.div
                                variants={fadeIn('left', 'tween', 1.2, 1.2)}
                                initial="hidden"
                                whileInView="show">
                            <VerticalList/>
                            </motion.div>
                        </ColumnTwoVideos>
                    </Container>
                </ColumnTwo>

            </HomeContainer>
        </motion.div>
    )
};

export default Player;
