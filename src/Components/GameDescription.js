import styled from "styled-components";
import {useState } from "react";

const GameDescription = ({text}) =>{
    const [isShown, setIsShown] = useState(true);

    const toggleShowMore = () => setIsShown(!isShown);
return (
    <Wrapper>
        {
           isShown? <>
           <Text dangerouslySetInnerHTML={ {__html: text.substr(0,100)}} />
           <MoreBtn onClick={toggleShowMore}>more</MoreBtn>
           </>:
           <>
           <Text dangerouslySetInnerHTML={ {__html: text} } />
           <MoreBtn onClick={toggleShowMore}>less</MoreBtn>
           </>
           
        }
    </Wrapper>
)
   
}

const Wrapper = styled.div``;;
const Text = styled.div``;
const MoreBtn = styled.button`

`;
export default GameDescription; 