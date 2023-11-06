import React, {useState} from 'react'
import Videos from '../../pages/Home/Mock'
import {CarouselContainer, CarouselItem, Container} from './styles'
import { useNavigate } from 'react-router-dom'

const VerticalList = () => {

    const [videos] = useState(Videos)
    const navigate = useNavigate()

    return (
        <Container>
            <h3 className="Title">Você pode Gostar</h3>
            {videos
                .slice(0, 10)
                .map((video) => (
                    <CarouselContainer key={video.id} onClick={() => navigate('/player')}>
                        <CarouselItem backgroundUrl={video.url_image}/>
                        <p className='item-name'>{video.title}</p>
                    </CarouselContainer>
                ))}
        </Container>
    )
}

export default VerticalList
