import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar2 from "./SearchBar2";

const Header = () => {
    return (
       <Wrapper>
      <Name to="/"><h1>Random game picker</h1></Name>
      <SearchBar2/>
       </Wrapper>
    )
};

const  Wrapper = styled.header`
    display: flex;
    align-items:baseline;
    align-content:space-around;
    gap: 20px;
    height: 70px;
    text-align:center; 
    margin-bottom:20px;
    height: 10%;

`;

const Name = styled(Link)`
padding-left:30px ;
padding-right:40px ;
text-decoration:none;
color: beige;
`

export default Header;
