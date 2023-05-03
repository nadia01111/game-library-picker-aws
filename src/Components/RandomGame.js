import styled from "styled-components";
import { useEffect, useState } from "react";
import GameDetails from "./GameDetails";

const RandomGame = ({ key }) => {
    const [status, setStatus] = useState("loading");
    const [gameObj, setGameObj] = useState(null);
    const [gameData, setGameData] = useState(null);
    const [gameDescription, setGameDescription] = useState(null);


    useEffect(()=> {
        fetch("https://tranquil-brook-78066.herokuapp.com/random")
            .then((res)=>res.json())
            .then((data) => {
                console.log(data);
                setStatus("loaded");
                setGameData(data);
    
            })
            .catch((err)=> {
                setStatus("error");
                throw new Error(err.stack);
            });
         
    },[])
    
   

    if (status ==="loading") {return <div>loading</div>}
    return (
    <GameDetails key={key} gameData = {gameData}/>
    )
};

const  Wrapper = styled.div`
margin: 30px 60px 30px 60px;
padding: 20px 30px 20px 30px;
display: flex;
flex-direction:column;
align-items:center;
background-color:black;
border-radius:5%;
/* height:600px; */
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
