import { Inter, Noto_Sans_JP } from 'next/font/google';
import classNames from 'classnames';

import Body from '@/components/common/layout/body';
import Head from '@/components/common/layout/head';
import Html from '@/components/common/layout/html';
import Root from '@/components/common/layout/root';

import { LayoutProps } from '@/common/interfaces/layout.interface';

const fontNotoSansJp = Noto_Sans_JP({
  subsets: ['cyrillic', 'latin', 'latin-ext'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['300', '400', '700']
});

const fontInter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '700']
});

export default async function MainLayout({ children, params }: LayoutProps) {
  return (
    <Html locale={params.locale}>
      <Head />
      <Body className={classNames(fontNotoSansJp.variable, fontInter.variable, 'font-notosansjp')}>
        <Root>{children}</Root>
      </Body>
    </Html>
  );
}
