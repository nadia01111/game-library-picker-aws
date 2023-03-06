import { createContext, useEffect, useState, useRef, useContext } from "react";
export const AllGamesContext = createContext(null);
const { v4: uuidv4 } = require("uuid");

export const  AllGamesContextProvider = ({children}) => {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://tranquil-brook-78066.herokuapp.com/all")
        .then ((res) => res.json())
         .then((data)=> {
             console.log(data);
             setGames(data);
             setLoading(true);
            
     })
        .catch((err) => {
            throw new Error (err.stack)
        })
    },[])

    return (
        <AllGamesContext.Provider
        value={{
            games,
            loading

            }}>
        {children}
        </AllGamesContext.Provider>
    )
}