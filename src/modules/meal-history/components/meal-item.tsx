'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import { formatMMDD } from '@/common/utils/date.util';

import { MealHistory } from '../interfaces/meal-history.interface';

type MealItemProps = {
  item: MealHistory;
};

const MealItem: FC<MealItemProps> = ({ item }) => {
  const date = formatMMDD(item.createdAt);

  return (
    <div className="meal-item relative">
      <Image
        src={item.image}
        width={234}
        height={234}
        className="object-cover object-center h-[234px] w-[234px]"
        alt={'Meal'}
      />
      <p className="absolute bottom-0 left-0 bg-primary-300 py-1 px-2 font-inter text-white">
        {date}.{item.title}
      </p>
    </div>
  );
};

export default MealItem;
