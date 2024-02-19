import { ResponseFormat } from '@/common/interfaces/api-response.interface';

export type MealHistory = {
  id: string;
  image: string;
  createdAt: string;
  title: string;
};

export type MealHistoriesResponse = ResponseFormat<MealHistory[]>;
export type MealHistoryResponse = ResponseFormat<MealHistory>;
