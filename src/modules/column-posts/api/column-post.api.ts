import HttpRequest from '@/common/http/http-request';

import { ColumnPostsResponse } from '../interfaces/column-post.interface';

export const getColumnPostList = (page: number) => {
  return HttpRequest.get<ColumnPostsResponse>(`/data/column-post-${page}.json`);
};

const ColumnPostApi = { getColumnPostList };

export default ColumnPostApi;
