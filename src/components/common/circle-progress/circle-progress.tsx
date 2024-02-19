'use client';

import React, { FC } from 'react';

type CircularProgressProps = {
  value: number;
};

const CircularProgress: FC<CircularProgressProps> = ({ value }) => {
  return (
    <svg viewBox="0 0 36 36">
      <path
        className="animate-stroke-dash"
        stroke="#FFFFFF"
        fill="none"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeDasharray={`${value}, 100`}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        filter="url(#shadow)"
      />
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="0.6" floodColor={'#FC7400'} floodOpacity="1" />
        </filter>
      </defs>
    </svg>
  );
};

export default CircularProgress;
