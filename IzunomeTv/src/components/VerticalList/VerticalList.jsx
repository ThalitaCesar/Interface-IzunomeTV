import React, { useState } from 'react'
import Videos from '../../pages/Home/Mock'
import { CarouselContainer, CarouselItem, Container } from './styles'

const VerticalList = () => {

const [videos, setVideos] = useState(Videos)

return (
    <Container>
        <h3 className="Title">Você pode Gostar</h3>
     {videos.map((video) => (
       <CarouselContainer key={video.id}>
       <CarouselItem backgroundUrl={video.url_image}/>
        <p className='item-name'>{video.title}</p>
     </CarouselContainer>
        ))}
    </Container>
  )
}

export default VerticalList
