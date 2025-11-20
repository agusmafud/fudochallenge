import { useEffect } from 'react';
import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer'

import fetchData from '../../helpers/fetchData';

type UseInfiniteScrollFetchProps = {
  url: string,
  queryKey: string[],
  pageLimit: number,
  initialPageParam: number,
};

const useInfiniteScrollFetch = <TData, >({
  url,
  queryKey,
  pageLimit,
  initialPageParam,
}: UseInfiniteScrollFetchProps) => {
  const queryFn = ({ pageParam }: { pageParam: number }) => fetchData({ url, page: pageParam, limit: pageLimit });

  const { ref: inViewRef, inView } = useInView()
  
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<TData[], Error, InfiniteData<TData[]>, string[], number>({
    queryKey,
    queryFn,
    initialPageParam,
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      const isFirstPage = firstPageParam <= initialPageParam;
      
      return isFirstPage 
        ? undefined
        : firstPageParam - 1;
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      const isLastPage = lastPage.length < pageLimit;

      return isLastPage 
        ? undefined
        : lastPageParam + 1;
    },
  })

  useEffect(() => {
    const shouldFetchNextPage = inView && hasNextPage && !isFetchingNextPage;

    if (shouldFetchNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return ({
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    inViewRef,
  })
}

export default useInfiniteScrollFetch;
