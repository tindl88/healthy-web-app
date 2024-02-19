import React from 'react';
import { Metadata } from 'next';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function HomePage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <h1>Top Page</h1>
      </div>
    </div>
  );
}

export async function generateMetadata(_pageProps: PageBaseProps): Promise<Metadata> {
  return {
    title: 'Top Page',
    description: 'Top Page'
  };
}
