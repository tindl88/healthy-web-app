import React, { FC, ReactNode } from 'react';

type HtmlProps = {
  children?: ReactNode;
  locale?: string;
};

const Html: FC<HtmlProps> = ({ children, locale = 'jp' }) => {
  return (
    <html className="scrollbar h-full" lang={locale}>
      {children}
    </html>
  );
};

export default Html;
