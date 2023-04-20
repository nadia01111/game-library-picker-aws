import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameDetails from "./GameDetails";

const GameID =()=> {
const [status, setStatus] = useState("loading");
const {gameId} = useParams();
const [gameData, setGameData] = useState("");

useEffect (() => {
    fetch(`https://tranquil-brook-78066.herokuapp.com/game/${gameId}`)
    .then((res) =>res.json())
    .then ((data) => {
        setGameData(data);
        setStatus("loaded");
    })
}, [gameId]);




if (status ==="loading") {return <div>loading</div>}
    return (
    <GameDetails gameData={gameData} id={gameId}/>
    )

};

export default GameID;