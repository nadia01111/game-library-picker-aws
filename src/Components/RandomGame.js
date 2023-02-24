import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RandomGame = () => {
    const [status, setStatus] = useState("loading");
    const [gameObj, setGameObj] = useState(null);
    useEffect(()=> {
        fetch("https://tranquil-brook-78066.herokuapp.com/random")
            .then((res)=>res.json())
            .then((data) => {
                console.log(data);
                setStatus("loaded");
                setGameObj(data)
            })
            .catch((err)=> {
                setStatus("error");
                throw new Error(err.stack);
            });
    },[])
    if (status ==="loading") {return <div>loading</div>}
    return (
    
       <Wrapper>
           <H2>Did you play this game?</H2>
           <Img src={gameObj.Picture}/>
           <H3>{gameObj.Title}</H3>
           <Description>{gameObj.Description}</Description>
           {/* <Played>
               {gameObj.Played?<Btn>Played</Btn>:<Btn>Want to play</Btn>}</Played> */}
            <BtnWrap> 
                <Btn>YES</Btn>
                <Btn>NO</Btn>
            </BtnWrap>
              
           <Source>Source:  {gameObj.Source}</Source>
       </Wrapper>
 
    )
};

const  Wrapper = styled.div`
margin: 30px 60px 30px 60px;
padding: 20px 30px 20px 30px;
display: flex;
flex-direction:column;
align-items:center;
background-color:#31191A;
height:600px;
/* height: 60vh; */
width: 60vw;
border-radius:5px;
`;
const H2 = styled.h2`
    color: #B8B09F;
    margin-bottom: 20px ;
`;
const H3 = styled.h3``;
const Img = styled.img`
width: 30vw;
`;
const Description = styled.div`
height: 40px;
`;
const Played = styled.div``;
const Source = styled.div``;
const Btn = styled.button`
width: 50px;
padding:5px 10px;
margin: 10px 50px;
border-radius:10px;
`;
const BtnWrap= styled.div`
margin: 10px 10px 10px 10px;
display: flex;
justify-content:space-between;
`;

export default RandomGame;
