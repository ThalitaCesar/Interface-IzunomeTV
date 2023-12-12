import React from 'react'
import Videos from '../Home/Mock';
import {CardVideoItem, Layout,Menu,Pagination,TitlePage  } from 'src/components';
import { useState } from 'react';
import { Container, GridContainer } from './styles';


const Category = () => {

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
            <TitlePage NameTitle='Eu Caminho com Meishu Sama'/>
        <GridContainer>
          {currentVideos.map((video) => (
            <CardVideoItem key={video.id} video={video} />
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
export default Category
