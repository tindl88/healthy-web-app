import React from 'react';
import { Metadata } from 'next';

import AchievementRate from '@/modules/achievement-rate';
import MealCategories from '@/modules/meal-category/components/meal-categories';
import MealHistory from '@/modules/meal-history/components';

import BodyChart from '@/components/common/body-chart/body-chart';
import NoSsr from '@/components/common/no-ssr/no-ssr';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function HomePage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <div className="h-[312px] flex">
          <AchievementRate />
          <div className="bg-dark-600 grow">
            <NoSsr>
              <BodyChart
                width={676}
                height={312}
                data={[
                  { name: '1月', value1: 27, value2: 25 },
                  { name: '2月', value1: 25, value2: 20 },
                  { name: '3月', value1: 18, value2: 12 },
                  { name: '4月', value1: 16, value2: 16 },
                  { name: '5月', value1: 14, value2: 17 },
                  { name: '6月', value1: 12, value2: 15 },
                  { name: '7月', value1: 8, value2: 10 },
                  { name: '8月', value1: 7, value2: 6 },
                  { name: '9月', value1: 9, value2: 12 },
                  { name: '10月', value1: 11, value2: 15 },
                  { name: '11月', value1: 6, value2: 7 },
                  { name: '12月', value1: 4, value2: 3 }
                ]}
              />
            </NoSsr>
          </div>
        </div>
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
