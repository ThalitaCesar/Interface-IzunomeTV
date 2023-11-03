import React from "react";
import {ColumnOneVideo, ColumnTwoVideos, Container} from "./styles";
import VerticalList from "../../components/VerticalList/VerticalList";
import Comments from "../../components/Comments/Comments";
import PlayerVideo from "../../components/PlayerVideo/Player";
import Layout from "../../components/Layout/Layout";

const Player = () => {

    return (
        <Layout>
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
