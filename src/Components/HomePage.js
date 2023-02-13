import styled from "styled-components";
import { Link } from "react-router-dom";
import CurrentGame from "./CurrentGame";
const data = require('../assets/data');

const HomePage = () => {
    return (

        // {tweetArr.map((tweet) => {
        //     return (<Tweet tweetData = {tweet}/>)
        //   })}
       <Wrapper>
          {data.games.map((game) => {
                  return (
                  <GameWrapper to={CurrentGame}>
                    <img src={game.thumbnail}/>
                    <div>{game.title}</div> 
                    <div>Service: Steam</div>
                    <div>Played:NO</div>
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

export default HomePage;
