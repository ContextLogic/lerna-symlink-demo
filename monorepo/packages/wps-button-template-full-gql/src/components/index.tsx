import { FC, useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { Services, PageContext } from 'components/common/PageContext';
import GQLQueryResult from 'components/common/SpaceXLaunchResult';
import LaunchesButton from './common/LaunchesButton';
import MDButton from './common/MDButton';

type Props = {
  readonly text: string;
  readonly services: Services;
  readonly callMD?: boolean;
};

/** Top-level page */
const Page: FC<Props> = ({ text, services, callMD }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<string>('');

  return (
    <PageContext.Provider value={services}>
      <StyledContainer>
        <StyledTitle>
          <pre>create-react-app</pre> template for use in Lerna monorepo
        </StyledTitle>
        <h3>Read the README for usage details!</h3>

        {callMD ? (
          <MDButton
            text={text}
            setResults={setResults}
            setLoading={setLoading}
          />
        ) : (
          <LaunchesButton
            text={text}
            setResults={setResults}
            setLoading={setLoading}
          />
        )}

        <img src={Logo} alt="React logo" />
        <GQLQueryResult results={results} loading={loading} />
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
