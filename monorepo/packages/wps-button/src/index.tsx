import React, { ReactElement } from "react";

type Props = {
  readonly text: string;
};

const WPSButton = ({ text }: Props): ReactElement => {
  return (
    <button
      id="original"
      onClick={() => {
        window.open("http://parcel.wish.com");
      }}
    >
      {text}
    </button>
  );
};

export default WPSButton;
