'use client';

import { FC } from 'react';
import Link from 'next/link';

const NotFound: FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-center">
        <h1 className="text-bolder mt-20 mb-2 text-2xl font-bold leading-normal sm:text-3xl font-inter">404</h1>
        <div className="mb-8">
          <h1 className="text-h3 font-inter">Page not found</h1>
        </div>
        <Link
          href={'/'}
          className="font-inter inline-flex items-center underline hover:no-underline focus:outline-none sm:text-base"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
