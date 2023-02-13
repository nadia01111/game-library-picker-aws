import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
       <Wrapper>
           <StyeldLink to="/">All games</StyeldLink>
           <StyeldLink to="/random">Random game</StyeldLink>
           <StyeldLink to="/current">Current game</StyeldLink>
           <StyeldLink to="/import">Import</StyeldLink>
       </Wrapper>
    )
};

const  Wrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-around;
`;

const StyeldLink = styled(Link)`
text-decoration:none;
`;

export default NavBar;
