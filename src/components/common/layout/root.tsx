'use client';

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

type RootProps = {
  className?: string;
  children?: ReactNode;
};

const Root: FC<RootProps> = ({ className, children }) => {
  return <div className={classNames('root-app grow', className)}>{children}</div>;
};

export default Root;
