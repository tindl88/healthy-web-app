'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer bg-dark-500 text-white">
      <div className="container py-14">
        <Link className="py-2 px-6 text-white text-[11px] leading-4" href={'/my-records'}>
          <span>会員登録</span>
        </Link>
        <Link className="py-2 px-6 text-white text-[11px] leading-4" href={'/my-records'}>
          <span>運営会社</span>
        </Link>
        <Link className="py-2 px-6 text-white text-[11px] leading-4" href={'/my-records'}>
          <span>利用規約</span>
        </Link>
        <Link className="py-2 px-6 text-white text-[11px] leading-4" href={'/my-records'}>
          <span>個人情報の取扱について</span>
        </Link>
        <Link className="py-2 px-6 text-white text-[11px] leading-4" href={'/my-records'}>
          <span>特定商取引法に基づく表記</span>
        </Link>
        <Link className="py-2 px-6 text-white text-[11px] leading-4" href={'/my-records'}>
          <span>お問い合わせ</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
