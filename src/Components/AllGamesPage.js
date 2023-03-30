import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AllGamesContext } from "./AllGameContext";
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import { useMatchMedia } from "./useMatchMedia";
// import Img from "./Img";

const AllGamesPage = () => {
  const {games, loading} = useContext(AllGamesContext);
const {} = useMatchMedia;
 
    return (

       <Wrapper>
          {games?.map((game) => {
                  return (
                    // to={`/item/${item._id}`}>
                    // /game/:gameId
                  <GameWrapper to={`/game/${game.Id}`}>
                    <ImgWrap style={{
                      backgroundImage: `url(${game.Picture})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      width: '100%'
                    }}
                    
                    >
          
                      {/* <Img src={game.Picture}/> */}
                    </ImgWrap>
                      <Wrap>
                      <GameTitle>{game.Title}</GameTitle>
                      <div>Source: {game.Source}</div>
                      <div>Played: {game.Played?<span>yes</span>:<span>no</span>}</div>
                    </Wrap>
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
color:white;
transition: box-shadow .3s;
border-radius:10px;
border: 1px solid gray;
background: black;
float: left;

:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
`;

const Wrap = styled.div`
padding:2px;
width: 20vw;

`;

const GameTitle = styled.div`
overflow-wrap: break-word;
`;


const ImgWrap = styled.div`
width: 20vw;
height: 15vh;

`;

// const Img = styled.img`
// width:100%;
// height: 100%;
// `;

export default AllGamesPage;
