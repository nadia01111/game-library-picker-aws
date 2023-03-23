import styled from "styled-components";
import { LoremIpsum } from 'react-lorem-ipsum';
import { Link, redirect } from "react-router-dom";
import SearchBar from "./SearchBar";

const WelcomePage = () => {
    return (
       <Wrapper>
           <SearchBar/>
           <H2>Welcome to <span>User Name</span> game catalog!</H2>
           <Text><LoremIpsum div={1} /></Text>
           <StartBtn to="/random">Get started</StartBtn>
       </Wrapper>
    )
};

const Wrapper = styled.div``;

const H2 = styled.h2`
color: white;
span {
    color: #12CCFF;
};
`;
const Text = styled.div`
color: white;
width: 40%;
text-align:justify; 
margin-bottom:50px;
`;

const StartBtn = styled(Link)`

text-decoration:none;
color:black;
font-size:15px;
background-color: #12CCFF;
padding: 10px 20px;
border: transparent; 
border-radius:5px;

:hover {
    cursor: pointer;
    color:gray;
}
`;




export default WelcomePage;
