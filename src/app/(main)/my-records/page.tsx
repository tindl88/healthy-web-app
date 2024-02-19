import { Metadata } from 'next';

import BodyFatRecordGraph from '@/modules/body-fat-record-graph/components/body-fat-record-graph';
import MyDiary from '@/modules/my-diary/components';
import ExerciseList from '@/modules/my-exercise/components';
import RecordCategories from '@/modules/record-category/components';

import { PageBaseProps } from '@/common/interfaces/page.interface';

export default function MyRecordsPage(_pageProps: PageBaseProps) {
  return (
    <div className="grow">
      <div className="container">
        <div className="w-[960px] mx-auto">
          <RecordCategories />
          <BodyFatRecordGraph />
          <ExerciseList />
          <MyDiary />
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
