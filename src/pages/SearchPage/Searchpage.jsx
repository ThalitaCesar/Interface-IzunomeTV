import React from 'react';
import {CardVideoItem, Layout,Menu,Pagination} from 'src/components';
import { Container, GridContainer } from './styles';
import { useYoutube } from '../../api/YoutubeContext';

const SearchPage = () => {
  const { channelVideos, currentPage, setCurrentPage } = useYoutube(); 
  const itemsPerPage = 8;
  const videoList=channelVideos;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideos = videoList.slice(indexOfFirstItem, indexOfLastItem);
console.log('currentVideos', channelVideos)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <Menu />
      <Container>
        <GridContainer>
          {currentVideos.map((video) => (
            <CardVideoItem key={video.videoId} video={video} />
          ))}
        </GridContainer>
        <Pagination
          totalItems={videoList.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      </Container>
    </Layout>
  );
};

export default SearchPage;
