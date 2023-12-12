import React from 'react'
import {CardVideoMyList, Layout,Menu,Pagination, TitlePage} from 'src/components';
import Videos from '../Home/Mock';
import { useState } from 'react';
import { Container, GridContainer } from './styles';


const MyList = () => {

    const [videos] = useState(Videos);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVideos = videos.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <Layout>
        <Menu />
        <Container>
        <TitlePage NameTitle='Minha Lista'/>
        <GridContainer>
          {currentVideos.map((video) => (
            <CardVideoMyList key={video.id} video={video} />
          ))}
        </GridContainer>
        <Pagination
          totalItems={videos.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
        </Container>
      </Layout>
    );
};
export default MyList
