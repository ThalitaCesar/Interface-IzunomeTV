import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [channelVideos, setChannelVideos] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 100;

  const searchVideos = async (query) => {
    try {
      const apiKey = 'AIzaSyDxjEmkeeltkFUVeykFXeBC0UU7n5ViIOA';
      const channelId = 'UCKEcIPFaVeL50GKk3e9XwPw';
      const maxResults = videosPerPage;
  
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${query}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`);
      console.log("response", response);
      const searchData = response.data;
  
      if (searchData.items && searchData.items.length > 0) {
        const searchResults = searchData.items.map(item => ({
          videoId: item.id.videoId,
          description: item.snippet.description,
          liveBroadcastContent: item.snippet.liveBroadcastContent,
          publishedAt: item.snippet.publishedAt,
          thumbnails: {
            default: item.snippet.thumbnails.default.url,
            high: item.snippet.thumbnails.high.url,
            medium: item.snippet.thumbnails.medium.url,
          },
          title: item.snippet.title,
        }));
  
        setSearchList(searchResults);
      } else {
        console.error('Nenhum vídeo encontrado para a pesquisa.');
      }
    } catch (error) {
      console.error('Erro ao buscar vídeos do YouTube', error);
    }
  };
  
  useEffect(() => {
    console.log('currentPage', currentPage);
    console.log('searchList', searchList);
  }, [currentPage, searchList]);
  
  console.log('videoList', searchList);
  console.log('data', channelVideos);

  return (
    <YoutubeContext.Provider value={{ searchList, channelVideos, currentPage, setCurrentPage, searchVideos }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export const useYoutube = () => {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error('useYoutube deve ser usado dentro de um YoutubeProvider');
  }
  return context;
};
