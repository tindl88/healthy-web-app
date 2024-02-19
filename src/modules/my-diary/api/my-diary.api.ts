import HttpRequest from '@/common/http/http-request';

import { DiariesResponse } from '../interfaces/my-diary.interface';

export const getDiaryList = (page: number) => {
  return HttpRequest.get<DiariesResponse>(`/data/diary-${page}.json`);
};

const MyDiaryApi = { getDiaryList };

export default MyDiaryApi;
