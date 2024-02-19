import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import BodyInjector from './body-injector';
import Providers from './providers';

type BodyProps = {
  className?: string;
  children: ReactNode;
};

const Body: FC<BodyProps> = ({ className, children }) => {
  return (
    <body className={classNames('flex h-full flex-col antialiased', className)}>
      <Providers>
        {children}
        <BodyInjector />
      </Providers>
    </body>
  );
};

export default Body;