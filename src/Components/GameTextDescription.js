import styled from "styled-components";
import { useState } from "react";

const GameTextDescription = ({ text }) => {
  const [isShown, setIsShown] = useState(true);

  const toggleShowMore = () => setIsShown(!isShown);

  return (
    <Wrapper>
      {isShown ? (
        <Div1>
          <Text dangerouslySetInnerHTML={{ __html: text.substr(0, 300) }} /><MoreBtn onClick={toggleShowMore}>...more</MoreBtn>
        </Div1>
      ) : (
        <>
          <Text onClick={toggleShowMore} dangerouslySetInnerHTML={{ __html: text }} />
          <MoreBtn onClick={toggleShowMore}>...less</MoreBtn>
        </>
      )}
    </Wrapper>



  );
};

const Wrapper = styled.div`
  display: inline-flex;
  /* flex-direction: column; */
  /* flex-wrap: nowrap; */
  align-items: flex-end;
  justify-content: flex-start;
  width: 90%;
`;

const Text = styled.div`
  width: inherit;
`;

const MoreBtn = styled.span`
align-self:flex-end;
  margin-left: 0.5rem;
`;

const Div1 = styled.div`
display: flex;
flex-direction:column;
flex-wrap: nowrap;
`;

export default GameTextDescription;
