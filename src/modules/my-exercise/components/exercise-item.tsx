import React, { FC } from 'react';
import classNames from 'classnames';

import { ExerciseItem } from '../interfaces/my-exercise.interface';

type ExerciseItemProps = {
  className?: string;
  item: ExerciseItem;
};

const ExerciseItem: FC<ExerciseItemProps> = ({ className, item, ...rest }) => {
  return (
    <div className={classNames('exercise-item border-b border-[#777] py-1', className)} {...rest}>
      <div className="text-[15px] flex pl-4 items-center justify-between relative before:absolute before:left-0 before:content-[''] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full">
        <p className="">{item.name}</p>
        <p className="text-primary-300 text-[18px] leading-[22px]">{item.duration}</p>
      </div>
      <p className="text-[15px] text-primary-300">{item.energy}</p>
    </div>
  );
};

export default ExerciseItem;
