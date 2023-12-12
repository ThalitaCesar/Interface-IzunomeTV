import React, {useState, useContext} from 'react';
import {Input, SearchbarContainer} from './styles';
import SearchIcon from '../../assets/icons/search';
import {useYoutube} from '../../api/YoutubeContext';
import {useNavigate} from 'react-router-dom';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { searchVideos, setCurrentPage } = useYoutube();  
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (searchQuery.trim() !== '') {
        navigate('/searchpage');
        setCurrentPage(1);
        searchVideos(searchQuery);
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
      <SearchbarContainer>
        <SearchIcon color='var(--blue)' size={19} style={{ cursor: 'pointer' }} onClick={handleSearch} />
        <Input
          placeholder='Buscar'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </SearchbarContainer>
    );
  };
  
  export default Searchbar;