import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CurrentGame from "./CurrentGame";
import { AllGamesContext } from "./AllGameContext";
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import { useMatchMedia } from "./useMatchMedia";

const HomePage = () => {
  const {games, loading} = useContext(AllGamesContext);
const {} = useMatchMedia;
 
    return (

       <Wrapper>
          {games?.map((game) => {
                  return (
                  <GameWrapper to={CurrentGame}>
                    <Img src={game.Picture}/>
                    <div>{game.Title}</div> 
                    <div>Source: {game.Source}</div>
                    <div>Played: {game.Played?<span>yes</span>:<span>no</span>}</div>

                  </GameWrapper>
                      
                      )
              })
          }
       </Wrapper>
    )
};

const Wrapper = styled.div`

display:flex;
flex-wrap:wrap;

`;
const GameWrapper  = styled(Link)`
margin: 5px;
cursor: pointer;
padding:10px;
text-decoration:none;
color:black;
transition: box-shadow .3s;
border-radius:10px;
border: 1px solid #ccc;
background: #fff;
float: left;

:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
`;

const Img = styled.img`
width:20vw;
height:
`;

export default HomePage;
