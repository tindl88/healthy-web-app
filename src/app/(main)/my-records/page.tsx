import { Metadata } from 'next';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function MyRecordsPage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <h1>My Records</h1>
      </div>
    </div>
  );
}

export async function generateMetadata(_pageProps: PageBaseProps): Promise<Metadata> {
  return {
    title: 'MyRecords',
    description: 'MyRecords'
  };
}
