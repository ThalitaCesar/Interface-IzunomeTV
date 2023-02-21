import React from 'react'
import { DefaultUi, Player, Youtube } from "@vime/react";
import { BiLike } from 'react-icons/bi';
import { FaShareAlt } from 'react-icons/fa';
import { Video } from './styles';

const PlayerVideo = () => {
  return (
    <Video>
      <Player controls>
            <Youtube videoId='jVtOxA-GzR8' />
            <DefaultUi noClickToPlay/>
            </Player>
      <div className='flex'>
      
      <h3 className='title-video'>Culto Vesperal | Sede Central - 21/02/2023</h3>
      <div className="icons">
        <div className='icon'>
        <BiLike size={24}/>
        </div>
        <div className='icon'>
        <FaShareAlt size={24}/>
        </div>
      </div>
      </div>
      </Video>
  )
}

export default PlayerVideo
