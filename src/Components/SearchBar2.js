import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Typeahead } from 'react-bootstrap-typeahead';
import { AllGamesContext } from './AllGameContext';
import { useNavigate } from 'react-router-dom';

const SearchBar2= () => {
 var titles;
    const {games,loading} = useContext(AllGamesContext);

    if (loading === true) {
        // console.log(games);
        let titles = games?.map(item => item.Title);
        console.log(titles);
        return (
            <SearchBar>
              <SearchTypeahead
                id="search-bar"
                options={titles}
                labelKey="name"
                placeholder="Search"
            
              />
            </SearchBar>
          );
    }


};

const SearchBar = styled.div`
  position: relative;
`;

const SearchTypeahead = styled(Typeahead)`
  .form-control {
    border-radius: 0;
  }

  .dropdown-menu {
    border-radius: 0;
  }
`;

export default SearchBar2;
