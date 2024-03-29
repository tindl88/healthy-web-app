import React from 'react';
import { Metadata } from 'next';

import AchievementRate from '@/modules/achievement-rate/components/achievement-rate';
import BodyFatPercentGraph from '@/modules/body-fat-percent-graph/components/body-fat-percent-graph';
import MealCategories from '@/modules/meal-category/components/meal-categories';
import MealHistory from '@/modules/meal-history/components';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function HomePage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <div className="h-[312px] flex">
          <AchievementRate />
          <BodyFatPercentGraph />
        </div>
        <div className="w-[960px] mx-auto">
          <MealCategories />
          <MealHistory />
        </div>
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
