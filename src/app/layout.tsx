import { Metadata } from 'next';

import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from '@/common/constants/site.constant';

import { LayoutProps } from '@/common/interfaces/layout.interface';

export default async function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export async function generateMetadata(_layoutProps: LayoutProps): Promise<Metadata> {
  return {
    metadataBase: new URL('http://localhost:3000'),
    title: {
      default: WEBSITE_NAME,
      template: '%s | ' + WEBSITE_NAME
    },
    description: WEBSITE_DESCRIPTION,
    viewport: 'width=device-width, initial-scale=1',
    icons: [
      { rel: 'shortcut icon', type: 'image/x-icon', url: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'mask-icon', sizes: '#5bbad5', url: '/safari-pinned-tab.svg' }
    ]
  };
}
