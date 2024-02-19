'use client';

import React, { FC } from 'react';
import classNames from 'classnames';

import { RecordCategoryItem as Item } from '../interfaces/record-category.interface';

import RecordCategoryItem from './record-category-item';

type RecordCategoriesProps = {
  className?: string;
};

const categories: Item[] = [
  { id: '1', image: '/images/my-recommend-1.jpg', title: 'BODY RECORD', description: '自分のカラダの記録' },
  { id: '2', image: '/images/my-recommend-2.jpg', title: 'MY EXERCISE', description: '自分の運動の記録' },
  { id: '3', image: '/images/my-recommend-3.jpg', title: 'MY DIARY', description: '自分の日記' }
];

const RecordCategories: FC<RecordCategoriesProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames('record-categories grid grid-cols-3 gap-12', className)} {...rest}>
      {categories.map(item => {
        return <RecordCategoryItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default RecordCategories;
