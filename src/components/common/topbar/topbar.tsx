'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import IconClose from '@/components/icons/close';
import IconHamburger from '@/components/icons/hamburger';
import Logo from '@/components/icons/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { ROUTES } from '@/common/constants/routes.constant';

import Menu from '../menu/menu';

const TopBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="topbar bg-dark-500">
      <div className="w-[960px] mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href={ROUTES.TOP_PAGE}>
            <Logo />
          </Link>
          <Menu />
          <DropdownMenu onOpenChange={setIsOpenMenu}>
            <DropdownMenuTrigger className="ml-7 focus:shadow-none">
              {isOpenMenu ? <IconClose /> : <IconHamburger />}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[280px] bg-gray-400 rounded-none p-0 border-none"
              side="bottom"
              align="end"
            >
              <DropdownMenuItem
                className="cursor-pointer text-[18px] leading-[26px] px-8 py-6 rounded-none text-white focus:text-white focus:bg-primary-400"
                onClick={() => router.push(ROUTES.MY_RECORD)}
              >
                自分の記録
              </DropdownMenuItem>
              <div className="border-t border-b border-t-[#2E2E2E] border-b-white opacity-20"></div>
              <DropdownMenuItem className="cursor-pointer text-[18px] leading-[26px] px-8 py-6 rounded-none text-white focus:text-white focus:bg-primary-400">
                体重グラフ
              </DropdownMenuItem>
              <div className="border-t border-b border-t-[#2E2E2E] border-b-white opacity-20"></div>
              <DropdownMenuItem className="cursor-pointer text-[18px] leading-[26px] px-8 py-6 rounded-none text-white focus:text-white focus:bg-primary-400">
                目標
              </DropdownMenuItem>
              <div className="border-t border-b border-t-[#2E2E2E] border-b-white opacity-20"></div>
              <DropdownMenuItem className="cursor-pointer text-[18px] leading-[26px] px-8 py-6 rounded-none text-white focus:text-white focus:bg-primary-400">
                選択中のコース
              </DropdownMenuItem>
              <div className="border-t border-b border-t-[#2E2E2E] border-b-white opacity-20"></div>
              <DropdownMenuItem
                className="cursor-pointer text-[18px] leading-[26px] px-8 py-6 rounded-none text-white focus:text-white focus:bg-primary-400"
                onClick={() => router.push(ROUTES.COLUMN)}
              >
                コラム一覧
              </DropdownMenuItem>
              <div className="border-t border-b border-t-[#2E2E2E] border-b-white opacity-20"></div>
              <DropdownMenuItem className="cursor-pointer text-[18px] leading-[26px] px-8 py-6 rounded-none text-white focus:text-white focus:bg-primary-400">
                設定
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
