import { Metadata } from 'next';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function ColumnsPage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <h1>Column</h1>
      </div>
    </div>
  );
}

export async function generateMetadata(_pageProps: PageBaseProps): Promise<Metadata> {
  return {
    title: 'Columns',
    description: 'Columns'
  };
}
