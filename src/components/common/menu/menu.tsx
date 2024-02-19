import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import IconChallenge from '@/components/icons/challenge';
import IconInfo from '@/components/icons/info';
import IconMemo from '@/components/icons/memo';

type MenuProps = {
  className?: string;
};

const Menu: FC<MenuProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('menu ml-auto', className)} {...rest}>
      <Link className="py-2 px-7 space-x-2 text-white inline-flex items-center" href={'/my-records'}>
        <IconMemo />
        <span>自分の記録</span>
      </Link>
      <Link className="py-2 px-7 space-x-2 text-white inline-flex items-center" href={'/challenges'}>
        <IconChallenge />
        <span>チャレンジ</span>
      </Link>
      <Link className="py-2 px-7 space-x-2 text-white inline-flex items-center" href={'/notifications'}>
        <p className="relative">
          <IconInfo />
          <span className="font-inter absolute -right-1.5 -top-0 count bg-primary-500 h-4 w-4 !leading-4 text-center text-caption rounded-full">
            1
          </span>
        </p>
        <span>お知らせ</span>
      </Link>
    </div>
  );
};

export default Menu;
