import React from 'react'
import Layout from '../../components/Layout/Layout'
import Videos from '../Home/Mock';
import CardVideoItem from '../../components/CardVideoItem/CardVideoItem';
import { useState } from 'react';
import { Container, GridContainer } from './styles';
import Pagination from '../../components/Pagination/Pagination';


const SearchPage = () => {

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
        <Container>
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
export default SearchPage
