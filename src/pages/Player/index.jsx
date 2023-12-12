import React from "react";
import {ColumnOneVideo, ColumnTwoVideos, Container} from "./styles";
import {Layout, PlayerVideo, Comments, VerticalList, Menu} from 'src/components'

const Player = () => {

    return (
        <Layout>
            <Menu />
            <Container>
                <ColumnOneVideo>
                    <PlayerVideo/>
                    <Comments/>
                </ColumnOneVideo>
                <ColumnTwoVideos>
                    <VerticalList/>
                </ColumnTwoVideos>
            </Container>
        </Layout>

    )
};

export default Player;
