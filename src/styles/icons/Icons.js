import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
    >
      <Path
        stroke={color}
        d="M6.667 17H4L16 5l12 12h-2.667M6.667 17v9.333A2.667 2.667 0 009.333 29h13.334a2.667 2.667 0 002.666-2.667V17"
      />
      <Path stroke={color} d="M18.667 17h-5.334v5.333h5.334V17z" />
    </Svg>
  );
};
export const LikeIcon = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
    >
      <Path
        stroke={color}
        d="M26 18.096L16 28 6 18.096a6.667 6.667 0 1110-8.755 6.667 6.667 0 1110 8.763"
      />
    </Svg>
  );
};
export const SearchIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <Path
        stroke="#939399"
        d="M13.333 22.667a9.333 9.333 0 100-18.667 9.333 9.333 0 000 18.667zM28 28l-8-8"
      />
    </Svg>
  );
};
export const CardIcon = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
    >
      <Path
        stroke={color}
        d="M8 28a2.667 2.667 0 100-5.333A2.667 2.667 0 008 28zm14.667 0a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z"
      />
      <Path stroke={color} d="M22.667 22.667H8V4H5.333" />
      <Path stroke={color} d="M8 6.667L26.667 8l-1.334 9.333H8" />
    </Svg>
  );
};
export const BurgerIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <Path stroke="#1F1F1F" d="M4.667 7h18.666M9 14h14m-8 7h8" />
    </Svg>
  );
};
export const StarIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={13}
      fill="none"
      viewBox="0 0 14 13"
      {...props}
    >
      <Path
        fill="#F5D150"
        stroke="#F5D150"
        d="M7 10.354l-3.6 1.893.687-4.01L1.171 5.4l4.025-.584 1.8-3.647 1.8 3.647 4.025.584-2.917 2.839.688 4.01L7 10.353z"
      />
    </Svg>
  );
};
