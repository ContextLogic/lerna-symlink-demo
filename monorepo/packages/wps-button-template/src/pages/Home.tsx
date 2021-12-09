import React, { ReactElement } from 'react';
import { LegoProvider, Button } from '@ContextLogic/lego';

type Props = {
  readonly text: string;
};

const WPSButtonTemplate = ({ text }: Props): ReactElement => {
  return (
    <LegoProvider>
      <Button
        onClick={() => {
          window.open('http://parcel.wish.com');
        }}>
        {text}
      </Button>
    </LegoProvider>
  );
};

export default WPSButtonTemplate;
