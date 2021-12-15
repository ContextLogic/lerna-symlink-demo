import React, { useState } from 'react';
import { ReactElement, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import { GQLService } from 'types';
import useService from '../../utils/useService';

type Props = {
  readonly text: string;
  readonly setResults: React.Dispatch<SetStateAction<string>>;
  readonly setLoading: React.Dispatch<SetStateAction<boolean>>;
};

const WPSButton = ({ text, setResults, setLoading }: Props): ReactElement => {
  const gqlService: GQLService = useService('gql');
  const [input, setInput] = useState<number>(1);
  const promise = gqlService.getSpaceXLaunches(input);

  const retrieveLaunches = () => {
    setLoading(true);
    promise.then((res) => {
      setResults(JSON.stringify(res, undefined, 2));
      setLoading(false);
    });
    setInput(input + 1);
  };

  return (
    <Button
      id={'full-demo'}
      onClick={() => {
        retrieveLaunches();
      }}>
      {text}
    </Button>
  );
};

export default WPSButton;
