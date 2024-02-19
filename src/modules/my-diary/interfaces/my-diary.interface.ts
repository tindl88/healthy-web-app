import { ResponseFormat } from '@/common/interfaces/api-response.interface';

export type DiaryItem = {
  id: string;
  title: string;
  description: string;
  createAt: string;
};

export type DiariesResponse = ResponseFormat<DiaryItem[]>;
export type DiaryResponse = ResponseFormat<DiaryItem>;
