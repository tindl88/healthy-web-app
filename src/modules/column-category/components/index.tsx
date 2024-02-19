'use client';

import React, { FC } from 'react';
import classNames from 'classnames';

import { ColumnCategoryItem as Item } from '../interfaces/column-category.interface';

import ColumnCategoryItem from './column-category-item';

type ColumnCategoriesProps = {
  className?: string;
};

const categories: Item[] = [
  { id: '1', title: 'RECOMMENDED COLUMN', description: 'オススメ' },
  { id: '2', title: 'RECOMMENDED DIET', description: 'ダイエット' },
  { id: '3', title: 'RECOMMENDED BEAUTY', description: '美容' },
  { id: '4', title: 'RECOMMENDED HEALTH', description: '健康' }
];

const ColumnCategories: FC<ColumnCategoriesProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('column-categories grid grid-cols-4 gap-8 mt-14', className)} {...rest}>
      {categories.map(item => {
        return <ColumnCategoryItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ColumnCategories;
