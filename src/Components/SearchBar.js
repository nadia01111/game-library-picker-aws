import { useContext, useState } from "react";
import { AllGamesContext } from "./AllGameContext";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

const games = useContext(AllGamesContext);
const [value, setValue] = useState("");
const [search,setSearch] = useState(false);

const matchedSuggestions = games?.games?.filter((game) => {
    return game.Title.toLowerCase().includes(value.toLowerCase())
});
console.log("matchedSuggestions", matchedSuggestions);

const showSearchResults = (ev) => {
    ev.preventDefault();
    setSearch(!search)
    // navigate(`/${value}`)
};
let navigate = useNavigate();


return (

<Wrap>
    <Form 
    onSubmit={showSearchResults}
    >
    <FiSearch/>
    <Input 
        onChange={(ev) => {
            setValue(ev.target.value);
             setSearch(false)
            }} 
        type="text" 
        placeholder="Search" 
        value={value}/>
    <Input 
    type="submit"
    value="Search"/>
<MdClear onClick={() => {setValue("")}}/>

{value?.length>=2 && matchedSuggestions?.length>0 ?
<Ul>{
    !search && matchedSuggestions.map((suggestion) =>{

        return (<Li 
            key={suggestion.Id} 
            onClick={()=>{navigate(`/game/${suggestion.Id}`); 
            setSearch(!search)
            setValue(""); 
            }}>{suggestion.Title}</Li>)

        
    })
    }</Ul>:null
}
    </Form>
</Wrap>
)

}

const Wrap = styled.div``;
const Form = styled.form`
padding-left: 10px;
padding-right: 10px;
width: 35vw;
border: 0.5px solid gray;
border-radius: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: flex-start;
background-color: gray;
`;
const Input = styled.input`

padding-left: 5px;
border: none;
height: 30px;
width: 100%;
outline: none;
background-color: transparent;


&[type=text]{
    font-size:20px;
    color:white;
}
:active{
    padding-left: 5px;
    border:none;
}

&[type=submit]{
    display: none;
}
::placeholder{
    color: white;
    opacity: 40%;
    padding: 5px;
    font-size: 15px;
}
`;
const Ul = styled.ul`
padding: 0px;
z-index: 2;
position: absolute;
top:60px;
background-color: gray;
width: inherit;


`;

const Li = styled.li`
list-style-type:none;
width: inherit;
:hover {
    background-color:#000000;
    /* color: #000000;; */
   
}`;

export default SearchBar;