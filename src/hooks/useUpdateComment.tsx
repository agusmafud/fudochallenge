import usePostData from "./api/usePostData";
import useToastNotification from "./toast/useToastNotification";
import type { Comment as TComment } from '../types';

const useUpdateComment = (postId: string) => {
  const baseUrl = 'https://665de6d7e88051d60408c32d.mockapi.io';
  const commentsUrl = `${baseUrl}/post/${postId}/comment`;
  const commentsQueryKey = ['comments', postId];
  const {
    mutate,
    error: updateCommentError,
    isPending: updateCommentIsPending,
    isSuccess: updateCommentIsSuccess,
  } = usePostData<Partial<TComment>>({
    url: commentsUrl,
    queryKey: commentsQueryKey,
  });
  
  const createNewComment = (comment: Partial<TComment>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...commentRest} = comment;
    const todayString = (new Date()).toISOString();
    const newComment = {
      ...(commentRest),
      createdAt: todayString,
    };
    
    mutate({ body: newComment });
  };

  const editComment = (comment: Partial<TComment>) => {
    mutate({
      body: comment,
      method: 'PUT',
      id: comment.id,
    });
  }

  const deleteComment = (commentId: string) => {
    mutate({
      body: {},
      method: 'DELETE',
      id: commentId,
    });
  }

  useToastNotification({
    isActive: updateCommentIsSuccess,
    title: 'Datos Actualizados',
  });

  useToastNotification({
    isActive: !!updateCommentError,
    title: 'Error de conexión',
  });

  return ({
    createNewComment,
    editComment,
    deleteComment,
    updateCommentIsPending,
  });
};

export default useUpdateComment;
