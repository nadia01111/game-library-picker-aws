import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBar = ({ onRandomGameClick }) => {
    return (
       <Wrapper>
           <StyeldLink to="/">Home</StyeldLink>
           <StyeldLink to="/all">All games</StyeldLink>
           <StyeldLink onClick={onRandomGameClick} to="/random">Random game</StyeldLink>
           <StyeldLink to="/import">Import</StyeldLink>
       </Wrapper>
    )
};

const  Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    width:200px;

`;

const StyeldLink = styled(Link)`
text-decoration:none;
padding: 5px 0px 5px 5px;
font-size: 24px;
color: white;
width: 200px;
cursor: pointer;
:hover {
    background-color:black;
}

`;

export default SideBar;
