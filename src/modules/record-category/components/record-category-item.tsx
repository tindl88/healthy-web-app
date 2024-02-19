import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import useScrollTo from '@/common/hooks/use-scroll-to';

import { RecordCategoryItem } from '../interfaces/record-category.interface';

type RecordCategoryItemProps = {
  className?: string;
  item: RecordCategoryItem;
};

const RecordCategoryItem: FC<RecordCategoryItemProps> = ({ className, item, ...rest }) => {
  const scrollTo = useScrollTo();

  return (
    <div className={classNames('record-cate-item p-6 bg-primary-300', className)} {...rest}>
      <div
        key={item.id}
        className="w-[240px] h-[240px] relative cursor-pointer"
        onClick={() => scrollTo.element(item.section)}
      >
        <Image
          src={item.image}
          width={240}
          height={240}
          className="grayscale object-cover object-center h-[240px] w-[240px]"
          alt={item.title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="absolute text-center top-1/2 left-0 w-full -translate-y-1/2">
          <h3 className="font-inter text-[25px] leading-[30px] text-primary-300">{item.title}</h3>
          <p className="mt-2 text-sm text-white inline-flex bg-primary-400 py-0.5 px-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecordCategoryItem;
