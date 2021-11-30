import React, { ReactElement } from "react";
import { Button } from "react-bootstrap";

type Props = {
  readonly text: string;
};

const WPSButton = ({ text }: Props): ReactElement => {
  return (
    <Button
      onClick={() => {
        window.open("http://parcel.wish.com");
      }}
    >
      {text}
    </Button>
  );
};

export default WPSButton;
