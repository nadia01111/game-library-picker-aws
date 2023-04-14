// import React, { useState, useContext } from 'react';
// import styled from 'styled-components';

// import { useAsync } from 'react-bootstrap-typeahead';
// import { AllGamesContext } from './AllGameContext';
// import { useNavigate } from 'react-router-dom';

// const SearchBar2= () => {
//  var titles;
//  let navigate = useNavigate();

//     const {games,loading} = useContext(AllGamesContext);
    
//     if (loading === true) {
//         let titles = games?.map(item => item.Title);

//         // const func = () => {
//         //     navigate(`/game/:${gameId}`)
//         // }
//         return (
          
//             <SearchBar >
//                 <SearchTypeahead
//                 id="search-bar"
//                 options={titles}
//                 labelKey="name"
//                 placeholder="Search"
//               />
//                     <Input 
//                     type="submit"
//                     value="Search"/>
//                     </SearchBar>
//           );
//     }


// };

// const SearchBar = styled.form`
//   position: relative;
// `;

// const Input = styled.input`
// display:none`;

// const SearchTypeahead = styled(Typeahead)`
//   .form-control {
//     border-radius: 0;
//   }

//   .dropdown-menu {
//     border-radius: 0;
//   }
// `;

// export default SearchBar2;
