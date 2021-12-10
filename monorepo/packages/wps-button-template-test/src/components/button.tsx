import React, { ReactElement } from 'react';

type Props = {
  readonly text: string;
};

const WPSButtonTemplateTest = ({ text }: Props): ReactElement => {
  return (
    <button
      id={'template-test'}
      onClick={() => {
        window.open('https://parcel.wish.com');
      }}>
      {text}
    </button>
  );
};

export default WPSButtonTemplateTest;
