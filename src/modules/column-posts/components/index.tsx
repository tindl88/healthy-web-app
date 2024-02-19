'use client';

import React, { Fragment } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';

import ColumnPostApi from '../api/column-post.api';

import ColumnPostItem from './column-post-item';

const ColumnPostList = () => {
  const { status, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['column-post'],
    queryFn: async ({ pageParam }) => {
      const res = await ColumnPostApi.getColumnPostList(pageParam);

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
          <div className="column-post-list">
            <div className="grid grid-cols-4 gap-x-2 gap-y-6">
              {data.pages.map(page => (
                <Fragment key={page.meta?.paging?.currentPage}>
                  {page.data?.map(item => <ColumnPostItem key={item.id} item={item} />)}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="text-center">
            {hasNextPage && (
              <Button className="mt-7" disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? '読み込み中...' : 'コラムをもっと見る'}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ColumnPostList;
