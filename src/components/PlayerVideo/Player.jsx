import React from 'react'
import {DefaultUi, Player, Youtube} from "@vime/react";
import {Video} from './styles';
import {Tooltip} from 'antd';
import '@vime/core/themes/default.css';

const PlayerVideo = () => {
    return (
        <Video>
            <Player controls>
                <Youtube videoId='jVtOxA-GzR8'/>
                <DefaultUi noClickToPlay/>
            </Player>
            <div className='flex'>
                <h3 className='title-video'>Culto Vesperal | Sede Central - 21/02/2023</h3>
                <div className="icons">
                    <Tooltip title="curtir">
                        <div className='icon'>
                            <span className='icon-like'/>
                        </div>
                    </Tooltip>
                    <Tooltip title="compartilhar">
                        <div className='icon'>
                            <span className='icon-share'/>
                        </div>
                    </Tooltip>
                    <div
                        className='icon'
                        style={{
                        width: '200px'
                    }}>
                        <span
                            className='icon-plus'
                            style={{
                            marginRight: '4px'
                        }}/>
                        Minha lista
                    </div>
                </div>
            </div>
        </Video>
    )
}

export default PlayerVideo
