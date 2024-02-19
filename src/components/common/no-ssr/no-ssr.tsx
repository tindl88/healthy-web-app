import React, { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface INoSsrProps {
  children: ReactNode;
}

const NoSsr: FC<INoSsrProps> = props => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
