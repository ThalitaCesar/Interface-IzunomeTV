import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Input, SearchbarContainer } from './styles';
import SearchIcon from '../../../assets/icons/search';

const Searchbar = () => {


    return (
        <SearchbarContainer>
            <SearchIcon color='var(--strong-gray)' size={19} style={{cursor: 'pointer'}}/>
            <Input placeholder='Buscar'
            //  onClick={() => history.push("/searchpage")}
            />
        </SearchbarContainer>
    )
}

export default Searchbar;