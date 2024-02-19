'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { formatHHmm, formatYYYYMMDD } from '@/common/utils/date.util';

import { ColumnPostItem as Item } from '../interfaces/column-post.interface';

type ColumnPostItemProps = {
  item: Item;
};

const ColumnPostItem: FC<ColumnPostItemProps> = ({ item }) => {
  const date = formatYYYYMMDD(item.createAt);
  const time = formatHHmm(item.createAt);

  return (
    <div className="column-post-item">
      <div className="w-[234px] h-[144px] relative">
        <Image
          src={item.image}
          width={234}
          height={144}
          className="object-cover object-center h-full w-full"
          alt={item.title}
        />
        <div className="absolute bottom-0 left-0 text-[15px] bg-primary-300 leading-[30px] font-inter text-white space-x-2.5 px-2">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      <div>
        <h3 className="mt-2 text-[15px] leading-[22px]">{item.title}</h3>
        <div className="space-x-3">
          {item.tags.map((tag, i) => {
            return (
              <Link key={i} href="#" className="text-primary-400 text-[12px] leading-[22px]">
                #{tag}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColumnPostItem;
