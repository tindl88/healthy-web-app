'use client';

import React, { Fragment } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';

import MyDiaryApi from '../api/my-diary.api';

import DiaryItem from './diary-item';

const MyDiary = () => {
  const { status, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['my-diary'],
    queryFn: async ({ pageParam }) => {
      const res = await MyDiaryApi.getDiaryList(pageParam);

      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.meta?.paging?.nextPage ?? undefined
  });

  return (
    <div className="mt-14">
      {status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="diary-list">
            <h2 className="text-[22px] leading-[27px] font-inter mb-1">MY DIARY</h2>
            <div className="grid grid-cols-4 gap-3">
              {data.pages.map(page => (
                <Fragment key={page.meta?.paging?.currentPage}>
                  {page.data?.map(item => <DiaryItem key={item.id} item={item} />)}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="text-center">
            {hasNextPage && (
              <Button className="mt-7" disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? '読み込み中...' : '自分の日記をもっと見る'}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyDiary;
