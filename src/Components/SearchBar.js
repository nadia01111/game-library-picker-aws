import { useContext, useState } from "react";
import { AllGamesContext } from "./AllGameContext";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import styled from "styled-components";


const SearchBar = () => {
const games = useContext(AllGamesContext);
console.log(games);
const [value, setValue] = useState("");
const [search,setSearch] = useState(false);

const matchedSuggestions = games?.games?.filter((game) => {
    return game.Title.toLowerCase().includes(value.toLowerCase())
});

const showSearchResults = (ev) => {
    ev.preventDefault();
    setSearch(!search)
    navigate(`/${value}`)
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

<MdClear onClick={() => setValue("")}/>
    
    {value?.length>=2 && matchedSuggestions?.length>0 ?
    
    <Ul> { 
        !search && matchedSuggestions.slice(0,15).map((suggestion) => {
            return (<Li 
              key={suggestion._id} 
              onClick={()=>{navigate(`/item/${suggestion._id}`); 
              setValue(suggestion.name); 
              setSearch(!search)
              }}>{suggestion.name}</Li>
          )
    })} </Ul>:null}

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
z-index: 2;
position: absolute;
top:60px;
background-color: var(--color-navbar-beige);

`;

const Li = styled.li`
list-style-type:none;
:hover {
    background-color:var( --color-green);
    color: var(--color-navbar-beige);;
   
}`;

export default SearchBar;