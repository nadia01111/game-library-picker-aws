import { useEffect, useState } from "react";
import { MdDryCleaning } from "react-icons/md";
import { useParams } from "react-router-dom";


const Game =()=> {

const {gameId} = useParams();
const [gameData, setIGameData] = useState({});

useEffect (() => {
    fetch(`https://tranquil-brook-78066.herokuapp.com/game/${gameId}`)
    .then((res) =>res.json())
    .then ((data) => {
        console.log(data);
        setIGameData(data.data)
    })
}, [gameId]);

}
export default Game;