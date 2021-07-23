import React from "react";
import Svg, { Path } from "react-native-svg";

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
export const SearchIcon = ({ color }) => {
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

export const BackButton = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={9}
      height={18}
      fill="none"
      viewBox="0 0 9 18"
    >
      <Path
        fill="#1F1F1F"
        d="M7.308 17.25a1.185 1.185 0 01-.92-.433L.518 9.689a1.167 1.167 0 010-1.487l5.894-7.029a1.182 1.182 0 012.082.642c.03.31-.067.618-.267.858L2.958 8.95l5.269 6.378a1.168 1.168 0 01-.282 1.744c-.191.118-.412.18-.637.177z"
      />
    </Svg>
  );
};

export const OrderIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={92}
      height={92}
      fill="#317AE8"
      viewBox="0 0 92 92"
    >
      <Path
        stroke="#317AE8"
        d="M26.833 60.375a4.792 4.792 0 100 9.583 4.792 4.792 0 000-9.583zm-10.541 4.792c0-5.822 4.72-10.542 10.541-10.542 5.822 0 10.542 4.72 10.542 10.542s-4.72 10.541-10.542 10.541-10.541-4.72-10.541-10.541zm48.875-4.792a4.792 4.792 0 100 9.583 4.792 4.792 0 000-9.583zm-10.542 4.792c0-5.822 4.72-10.542 10.542-10.542s10.541 4.72 10.541 10.542-4.72 10.541-10.541 10.541c-5.822 0-10.542-4.72-10.542-10.541z"
      />
      <Path
        fillRule="evenodd"
        stroke="#317AE8"
        d="M5.035 18.009a2.875 2.875 0 012.632-1.717h42.166a2.875 2.875 0 012.876 2.875v.958H69c1.01 0 1.946.53 2.465 1.396l11.476 19.126a2.86 2.86 0 01.434 1.567v22.953a2.875 2.875 0 01-2.875 2.875h-7.666A2.875 2.875 0 0170.8 67.2L52.71 49.107v13.185h4.79a2.875 2.875 0 110 5.75h-23a2.875 2.875 0 010-5.75h8.798L5.548 21.109a2.875 2.875 0 01-.513-3.1zM46.96 57.776L14.202 22.042H46.96v35.734zm9.815-12.734l17.25 17.25h3.601v-17.25h-20.85zm18.648-5.75H52.71V25.875h14.663l8.05 13.417zM10.84 47.035a2.875 2.875 0 013.232 1.513l7.666 15.333a2.875 2.875 0 01-2.571 4.16H11.5a2.875 2.875 0 01-2.875-2.874V49.833c0-1.333.917-2.491 2.215-2.798zm3.535 14.977v.28h.14l-.14-.28z"
      />
      <Path
        stroke="#317AE8"
        d="M8.625 34.5a2.875 2.875 0 012.875-2.875h15.333a2.875 2.875 0 110 5.75H11.5A2.875 2.875 0 018.625 34.5z"
      />
    </Svg>
  );
};
