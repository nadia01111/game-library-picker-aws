import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
       <Wrapper>
      <Name to="/"><h1>Random game picker</h1></Name>
       </Wrapper>
    )
};

const  Wrapper = styled.header`
    height: 70px;
    text-align:center; 
    margin-bottom:20px;

`;

const Name = styled(Link)`
text-decoration:none;
color: beige;
`

export default Header;
