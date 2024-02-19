import React, { FC } from 'react';
import classNames from 'classnames';

type MealButtonsProps = {
  className?: string;
};

const MealButtons: FC<MealButtonsProps> = ({ className, ...rest }) => {
  return <div className={classNames('meal-buttons grid grid-cols-4', className)} {...rest}></div>;
};

export default MealButtons;
