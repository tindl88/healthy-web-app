import { Metadata } from 'next';

import ExerciseList from '@/modules/my-exercise/components';
import RecordCategories from '@/modules/record-category/components';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function MyRecordsPage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <div className="w-[960px] mx-auto">
          <RecordCategories />
          <ExerciseList />
        </div>
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
