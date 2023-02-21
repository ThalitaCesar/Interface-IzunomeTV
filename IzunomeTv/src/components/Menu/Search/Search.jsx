import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Input, SearchbarContainer } from './styles';

const Searchbar = () => {


    return (
        <SearchbarContainer>
            <BiSearch size={25} style={{cursor: 'pointer'}}/>
            <Input placeholder='Buscar'
            //  onClick={() => history.push("/searchpage")}
            />
        </SearchbarContainer>
    )
}

export default Searchbar;