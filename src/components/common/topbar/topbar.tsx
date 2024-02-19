'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import IconHamburger from '@/components/icons/hamburger';
import Logo from '@/components/icons/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { ROUTES } from '@/common/constants/routes.constant';

import Menu from '../menu/menu';

const TopBar = () => {
  const router = useRouter();

  return (
    <div className="topbar bg-dark-500">
      <div className="w-[960px] mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href={ROUTES.TOP_PAGE}>
            <Logo />
          </Link>
          <Menu />
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-7">
              <IconHamburger />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-400 rounded-none" side="bottom" align="end">
              <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(ROUTES.MY_RECORD)}>
                自分の記録
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>体重グラフ</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>目標</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>選択中のコース</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(ROUTES.COLUMN)}>
                コラム一覧
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>設定</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
