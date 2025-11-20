type UseFetchBaseProps<TData> = {
  url: string,
  fallBackResponse?: TData,
};
type UseFetchPageProps = {
  page: number,
  limit: number,
};
type UseFetchProps<TData = unknown> = UseFetchBaseProps<TData> | (UseFetchBaseProps<TData> & UseFetchPageProps);

const errorMessage = 'Failed to fetch data';

const fetchData = async <TData = unknown>(props: UseFetchProps<TData>) => {
  const { url, fallBackResponse } = props;
  const urlObj = new URL(url);
  
  if ('page' in props && 'limit' in props) {
    const { page, limit } = props;
    urlObj.searchParams.append('page', String(page));
    urlObj.searchParams.append('limit', String(limit));
  }
  
  const response = await fetch(urlObj, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  
  if (response.ok) {
    return await response.json();
  }

  if (fallBackResponse) {
    return fallBackResponse;
  }
  
  throw new Error(errorMessage);
};

export default fetchData;
