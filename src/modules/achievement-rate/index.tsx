'use client';

import React, { FC } from 'react';
import Image from 'next/image';

type AchievementRateProps = {
  className?: string;
};

const AchievementRate: FC<AchievementRateProps> = () => {
  return (
    <div className="meal-item relative">
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
