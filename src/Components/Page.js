import styled from "styled-components";
import { LoremIpsum } from 'react-lorem-ipsum';

const Page = () => {
    return (
       <Wrapper>
           <h2>Welcome!</h2>
           <LoremIpsum div={1} />
       </Wrapper>
    )
};

const  Wrapper = styled.div``;
const  sh = styled.div``;

export default Page;
