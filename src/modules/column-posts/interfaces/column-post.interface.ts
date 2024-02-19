import { ResponseFormat } from '@/common/interfaces/api-response.interface';

export type ColumnPostItem = {
  id: string;
  image: string;
  title: string;
  createAt: string;
  tags: string[];
};

export type ColumnPostsResponse = ResponseFormat<ColumnPostItem[]>;
