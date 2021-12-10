import React, { ReactElement } from 'react';

type Props = {
  readonly text: string;
};

const WPSButtonTemplate = ({ text }: Props): ReactElement => {
  return (
    <button
      onClick={() => {
        window.open('http://parcel.wish.com');
      }}>
      {text}
    </button>
  );
};

export default WPSButtonTemplate;
