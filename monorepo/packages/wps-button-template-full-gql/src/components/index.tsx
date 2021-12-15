import { FC, useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { Services, PageContext } from 'components/common/PageContext';
import SpaceXLaunchResult from 'components/common/SpaceXLaunchResult';
import WPSButton from './common/WPSButton';

type Props = {
  readonly text: string;
  readonly services: Services;
};

/** Top-level page */
const Page: FC<Props> = ({ text, services }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState('');

  return (
    <PageContext.Provider value={services}>
      <StyledContainer>
        <StyledTitle>
          <pre>create-react-app</pre> template for use in Lerna monorepo
        </StyledTitle>
        <h3>Read the README for usage details!</h3>
        <WPSButton
          text={text}
          setResults={setResults}
          setLoading={setLoading}></WPSButton>
        <img src={Logo} alt="React logo" />
        <SpaceXLaunchResult results={results} loading={loading} />
      </StyledContainer>
    </PageContext.Provider>
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

export default Page;
