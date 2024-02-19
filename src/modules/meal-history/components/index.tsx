'use client';

import React, { Fragment } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';

import MealHistoryApi from '../api/meal-history.api';

import MealItem from './meal-item';

const MealHistory = () => {
  const { status, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['meal-history'],
    queryFn: async ({ pageParam }) => {
      const res = await MealHistoryApi.getMealHistory(pageParam);

      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.meta?.paging?.nextPage ?? undefined
  });

  return (
    <div className="mt-6 mx-auto">
      {status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="meal-list">
            <div className="grid grid-cols-4 gap-1.5">
              {data.pages.map(page => (
                <Fragment key={page.meta?.paging?.currentPage}>
                  {page.data?.map(item => <MealItem key={item.id} item={item} />)}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="text-center">
            {hasNextPage && (
              <Button className="mt-7" disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? '読み込み中...' : '記録をもっと見る'}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MealHistory;
