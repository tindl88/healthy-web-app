'use client';

import React, { FC } from 'react';

import { formatHHmm, formatYYYYMMDD } from '@/common/utils/date.util';

import { DiaryItem } from '../interfaces/my-diary.interface';

type DiaryItemProps = {
  item: DiaryItem;
};

const DiaryItem: FC<DiaryItemProps> = ({ item }) => {
  const date = formatYYYYMMDD(item.createAt);
  const time = formatHHmm(item.createAt);

  return (
    <div className="diary-item h-[231px] relative border-2 border-[#707070]">
      <div className="p-4">
        <div className="text-[18px] leading-[22px] font-inter mb-2.5">
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div className="text-[12px] leading-[17px]">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
