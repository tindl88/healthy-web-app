'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import CircularProgress from '@/components/common/circle-progress/circle-progress';

const PERCENTAGE = 75;

type AchievementRateProps = {
  className?: string;
};

const AchievementRate: FC<AchievementRateProps> = () => {
  return (
    <div className="meal-item relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[181px] h-[181px]">
        <CircularProgress value={PERCENTAGE} />
        <div className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-x-1.5">
          <span className="drop-shadow-glow text-[18px] leading-[22px]">05/21</span>
          <span className="text-[25px] leading-[30px]">{PERCENTAGE}%</span>
        </div>
      </div>
      <Image
        src={'/images/achievement-rate.jpg'}
        width={540}
        height={312}
        className="object-cover object-center h-[312px] w-[540px]"
        alt={'Achievement rate'}
      />
    </div>
  );
};

export default AchievementRate;
