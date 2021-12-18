import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import useService from 'utils/useService';

/** Component containing result of a Google search (service demo) */
const GoogleSearchResult: FC = () => {
  const { getSearchResult } = useService('merchant');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    const retrieveSearchResult = async () => {
      setLoading(true);
      const result = await getSearchResult();
      setSearchResult(JSON.stringify(result, undefined, 2));
      setLoading(false);
    };

    retrieveSearchResult();
  }, []);

  return (
    <>
      <h3>Sample service result:</h3>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <code>
            <pre>{searchResult}</pre>
          </code>
        )}
      </Container>
    </>
  );
};

// Container
const Container = styled.div`
  height: 400px;
  width: 600px;
  padding: 16px;
  border: 1px solid black;
  overflow-y: auto;

  /* Text/code */
  p,
  pre {
    margin: 0;
  }
`;

export default GoogleSearchResult;
