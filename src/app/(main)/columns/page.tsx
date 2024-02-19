import { Metadata } from 'next';

import ColumnCategories from '@/modules/column-category/components';
import ColumnPostList from '@/modules/column-posts/components';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function ColumnsPage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <div className="w-[960px] mx-auto">
          <ColumnCategories />
          <ColumnPostList />
        </div>
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
