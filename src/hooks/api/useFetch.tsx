import { useQuery } from '@tanstack/react-query';

import fetchData from '../../helpers/fetchData';

type UseFetchProps<TData> = {
  url: string,
  queryKey: string[],
  fallBackResponse?: TData,
};

const useFetch = <TData, >({
  url,
  queryKey,
}: UseFetchProps<TData>) => {
  const { data, error, isPending, isError } = useQuery<TData>({
    queryKey,
    queryFn: () => fetchData({ url }),
  })

  return ({
    data,
    error,
    isPending,
    isError,
  })
}

export default useFetch;
