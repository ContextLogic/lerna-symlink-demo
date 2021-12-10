import { FC } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { GenericProvider } from './GenericContextProvider';
import WPSButton from './WPSButton';

type Props = {
  readonly text: string;
  readonly svcObjectMap: any;
};

/** Home page (demo) */
const Home: FC<Props> = (props) => {
  const { text, svcObjectMap } = props;

  return (
    <GenericProvider m={svcObjectMap}>
      <StyledContainer>
        <StyledTitle>
          <pre>create-react-app</pre> template for use in Lerna monorepo
        </StyledTitle>
        <h3>Read the README for usage details! </h3>
        <WPSButton text={text}></WPSButton>
        <img src={Logo} alt="React logo" />
      </StyledContainer>
    </GenericProvider>
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

export default Home;
