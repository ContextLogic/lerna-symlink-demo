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

const MDButton = ({ text, setResults, setLoading }: Props): ReactElement => {
  const gqlService: GQLService = useService('gql');
  const promise = gqlService.getMDUserSettings({});

  const retrieveUserSettings = () => {
    setLoading(true);
    promise.then((res) => {
      setResults(JSON.stringify(res, undefined, 2));
      setLoading(false);
    });
  };

  return (
    <Button
      id={'md-gql-demo'}
      onClick={() => {
        retrieveUserSettings();
      }}>
      {text}
    </Button>
  );
};

export default MDButton;
