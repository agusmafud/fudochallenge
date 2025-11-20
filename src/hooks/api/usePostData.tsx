import { useMutation, useQueryClient  } from '@tanstack/react-query';

type UsePostDataProps = {
  url: string,
  queryKey: string[],
};
const errorMessage = 'Error de conexión';

const usePostData = <TData, >({
  url,
  queryKey,
}: UsePostDataProps) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending, isSuccess } = useMutation({
    mutationFn: async ({
      body,
      method = 'POST',
      id,
    }: {
      body: TData,
      method?: 'POST' | 'PUT' | 'DELETE',
      id?: string,
    }) => {
      const correspondingUrl = `${url}${id ? `/${id}` : ''}`;
      const response = await fetch(correspondingUrl, {
        method,
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return await response.json();
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  })

  return ({
    mutate,
    error,
    isPending,
    isSuccess,
  });
};

export default usePostData;
