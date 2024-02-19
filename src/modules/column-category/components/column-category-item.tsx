import React, { FC } from 'react';
import classNames from 'classnames';

import { ColumnCategoryItem } from '../interfaces/column-category.interface';

type ColumnCategoryItemProps = {
  className?: string;
  item: ColumnCategoryItem;
};

const ColumnCategoryItem: FC<ColumnCategoryItemProps> = ({ className, item, ...rest }) => {
  return (
    <div className={classNames('record-cate-item', className)} {...rest}>
      <div className="w-[216px] h-[144px] flex items-center relative cursor-pointer bg-dark-600">
        <div className="text-center">
          <h3 className="font-inter text-[22px] leading-[27px] text-primary-300">{item.title}</h3>
          <div className="border-t border-b w-14 mx-auto my-2 border-gray-400"></div>
          <p className="text-[18px] leading-[26px] text-white inline-flex">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ColumnCategoryItem;
