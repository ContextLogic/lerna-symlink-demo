import React from "react";
import { Button as LegoButton, ButtonProps } from "@ContextLogic/lego";

const Button: React.FC<ButtonProps> = (props) => {
  return <LegoButton {...props} />;
};
