import HttpRequest from '@/common/http/http-request';

import { MealHistoriesResponse } from '../interfaces/meal-history.interface';

export const getMealHistory = (page: number) => {
  return HttpRequest.get<MealHistoriesResponse>(`/data/meal-history-${page}.json`);
};

const MealHistoryApi = { getMealHistory };

export default MealHistoryApi;
