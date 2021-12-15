import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GQLService } from 'types';
import useService from 'utils/useService';

type Props = {
  readonly results: string;
  readonly loading: boolean;
};

/** Component containing result of a Google search (service demo) */
const SpaceXLaunchResult: FC<Props> = ({ results, loading }: Props) => {
  return (
    <>
      <h3>Sample service result:</h3>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <code>
            <pre>{results}</pre>
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

export default SpaceXLaunchResult;
