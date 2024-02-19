'use client';

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import IconCup from '@/components/icons/cup';
import IconKnife from '@/components/icons/knife';
import IconMealButton from '@/components/icons/meal-button';

type MealCategoriesProps = {
  className?: string;
};

export type MealCategory = {
  id: string;
  icon: ReactNode;
  title: string;
};

const categories: MealCategory[] = [
  { id: '1', icon: <IconKnife />, title: 'Morning' },
  { id: '2', icon: <IconKnife />, title: 'Lunch' },
  { id: '3', icon: <IconKnife />, title: 'Dinner' },
  { id: '4', icon: <IconCup />, title: 'Snack' }
];

const MealCategories: FC<MealCategoriesProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('meal-buttons grid grid-cols-4 w-[718px] mx-auto', className)} {...rest}>
      {categories.map(item => {
        return (
          <div key={item.id} className="w-[116px] h-[134px] relative cursor-pointer">
            <IconMealButton />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div>
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl text-white">{item.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MealCategories;
