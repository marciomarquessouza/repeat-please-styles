import React from "react"
import Svg, { Circle, Path, G, SvgProps } from "react-native-svg"

export const WarningIcon = (props: SvgProps):JSX.Element => {
  return (
    <Svg viewBox="0 0 508 508" {...props}>
      <Circle cx={254} cy={254} r={254} fill="#fd8469" />
      <Path
        d="M435.2 342.4L273.6 62c-8.8-15.2-30.4-15.2-39.2 0L72.8 342.4c-8.8 15.2 2 34 19.6 34h323.2c17.6 0 28.4-18.8 19.6-34z"
        fill="#fff"
      />
      <Path
        d="M92.4 356c-.4 0-1.2 0-2-1.2s0-2 0-2L252 72.4c0-.4.8-1.2 2-1.2s1.6.8 2 1.2l161.6 280.4c0 .4.8 1.2 0 2-.8 1.2-1.6 1.2-2 1.2H92.4z"
        fill="#ffd05b"
      />
      <G fill="#fff">
        <Path d="M275.6 197.2c0 36-9.6 84.4-21.6 84.4s-21.6-48.4-21.6-84.4 9.6-46.4 21.6-46.4 21.6 10.4 21.6 46.4z" />
        <Circle cx={254} cy={314} r={18} />
      </G>
    </Svg>
  );
};
