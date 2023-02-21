import React from "react";
import '@vime/core/themes/default.css';
import { ColumnOneVideo, ColumnTwoVideos, Container} from "./styles";
import { ColumnOne, ColumnTwo, HomeContainer } from "../Home/styles";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import Menu from "../../components/Menu/Menu";
import VerticalList from "../../components/VerticalList/VerticalList";
import Comments from "../../components/Comments/Comments";
import PlayerVideo from "../../components/PlayerVideo/Player";


const Player = () => {

  return (
  <div>
    <HomeContainer>
      <ColumnOne>
        <MenuLateral/>
      </ColumnOne>

      <ColumnTwo>
      <Menu/>
      <Container>
      <ColumnOneVideo>
      <PlayerVideo/>
      <Comments/>
      </ColumnOneVideo>
      <ColumnTwoVideos>
      <VerticalList/>
      </ColumnTwoVideos>
      </Container>
      </ColumnTwo>
    
    </HomeContainer>
  </div>
  )};

  export default Player;
