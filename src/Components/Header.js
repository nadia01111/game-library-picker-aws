import styled from "styled-components";

const Header = () => {
    return (
       <Wrapper>
           <h1>Random game picker</h1>
       </Wrapper>
    )
};

const  Wrapper = styled.header`
    height: 70px;
    text-align:center; 
    margin-bottom:20px;

`;

export default Header;
