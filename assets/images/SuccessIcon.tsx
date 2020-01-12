import React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

export const SuccessIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 50 50" {...props}>
      <Circle cx={25} cy={25} r={25} fill="#25ae88" />
      <Path
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M38 15L22 33l-10-8"
      />
    </Svg>
  );
};
