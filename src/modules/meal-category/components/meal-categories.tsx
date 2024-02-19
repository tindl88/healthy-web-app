'use client';

import React, { FC } from 'react';
import classNames from 'classnames';

import IconCup from '@/components/icons/cup';
import IconKnife from '@/components/icons/knife';
import IconMealButton from '@/components/icons/meal-button';

import { MealCategoryItem } from '../interfaces/meal-category.interface';

type MealCategoriesProps = {
  className?: string;
};

const categories: MealCategoryItem[] = [
  { id: '1', icon: <IconKnife />, title: 'Morning' },
  { id: '2', icon: <IconKnife />, title: 'Lunch' },
  { id: '3', icon: <IconKnife />, title: 'Dinner' },
  { id: '4', icon: <IconCup />, title: 'Snack' }
];

const MealCategories: FC<MealCategoriesProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('meal-buttons mx-auto w-[718px] mt-6', className)} {...rest}>
      <div className="grid grid-cols-4">
        {categories.map(item => {
          return (
            <div key={item.id} className="mx-auto w-[116px] h-[134px] relative cursor-pointer">
              <IconMealButton />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div>
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-xl text-white font-inter">{item.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealCategories;
