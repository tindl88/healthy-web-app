import { Metadata } from 'next';

import NotFound from '@/components/common/errors/404';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default async function NotFoundPage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <NotFound />
      </div>
    </div>
  );
}

export async function generateMetadata(_pageProps: PageBaseProps): Promise<Metadata> {
  return {
    title: 'NotFound',
    description: 'NotFound Description'
  };
}
