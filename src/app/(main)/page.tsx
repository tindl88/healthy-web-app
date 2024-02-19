import React from 'react';
import { Metadata } from 'next';

import MealCategories from '@/modules/meal-category/components/meal-categories';
import MealHistory from '@/modules/meal-history/components';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function HomePage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <MealCategories />
        <MealHistory />
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
