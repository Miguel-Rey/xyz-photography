import React from "react";

export type IndicatorProps = {
  active: boolean;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}