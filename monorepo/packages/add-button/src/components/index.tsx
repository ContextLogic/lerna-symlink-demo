import { FC, useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';

/** Home page (demo) */
const Home: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledContainer>
      <StyledTitle>
        <pre>create-react-app</pre> template for use in Lerna monorepo
      </StyledTitle>
      <h3>Read the README for usage details!</h3>
      <img src={Logo} alt="React logo" />
      <StyledButtonContainer>
        <button onClick={()=>setCount(count+1)}>Click me!</button>
        <div>{count}</div>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* React logo */
  & > img {
    height: 128px;
    width: 128px;
  }
`;

const StyledTitle = styled.h1`
  /* Inline code */
  & > pre {
    display: inline;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 10px;
`;

export default Home;
