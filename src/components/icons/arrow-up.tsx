import React from 'react';

const IconArrowUp: React.FC<React.SVGAttributes<Record<string, unknown>>> = ({ width = 48 }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
        fill="white"
        fillOpacity="0.01"
        stroke="#777777"
      />
      <path
        d="M30.5853 28.042L24.0003 21.6579L17.4153 28.042L16.5391 27.1925L24.0003 19.959L31.4615 27.1925L30.5853 28.042Z"
        fill="#777777"
      />
    </svg>
  );
};

export default IconArrowUp;
