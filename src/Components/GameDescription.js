import styled from "styled-components";
import {useState } from "react";

const GameDescription = ({text}) =>{
    const [isShown, setIsShown] = useState(true);

    const toggleShowMore = () => setIsShown(!isShown);
return (
    <Wrapper>
        {
           isShown? <>
           <Text dangerouslySetInnerHTML={ {__html: text.substr(0,150)}} />
           <MoreBtn onClick={toggleShowMore}>...more</MoreBtn>
           </>:
           <>
           <Text dangerouslySetInnerHTML={ {__html: text} } />
           <MoreBtn onClick={toggleShowMore}>...less</MoreBtn>
           </>
           
        }
    </Wrapper>
)
   
}

const Wrapper = styled.div`
display: flex;
flex-direction:column;
flex-wrap:nowrap;
align-items:center;
align-content:flex-start;
justify-content:flex-start;
width: 90%;
`;
const Text = styled.div`

`;
const MoreBtn = styled.span`
/* background-color: transparent;
border: none; */
/* color: white; */
`;
export default GameDescription; 