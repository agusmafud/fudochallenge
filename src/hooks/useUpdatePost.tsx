import usePostData from "./api/usePostData";
import useToastNotification from "./toast/useToastNotification";
import type { Post as TPost } from '../types';

const useUpdatePost = () => {
  const baseUrl = 'https://665de6d7e88051d60408c32d.mockapi.io';
  const postsUrl = `${baseUrl}/post`;
  const postsQueryKey = ['posts'];
  const {
    mutate,
    error: updatePostError,
    isPending: updatePostIsPending,
    isSuccess: updatePostIsSuccess,
  } = usePostData<Partial<TPost>>({
    url: postsUrl,
    queryKey: postsQueryKey,
  });
  
  const createNewPost = (post: Partial<TPost>) => {
    const todayString = (new Date()).toISOString();
    const newPost = {
      ...(post),
      createdAt: todayString,
    };
    mutate({ body: newPost });
  };

  const editPost = (post: Partial<TPost>) => {
    mutate({
      body: post,
      method: 'PUT',
      id: post.id,
    });
  }

  const deletePost = (postId: string) => {
    mutate({
      body: {},
      method: 'DELETE',
      id: postId,
    });
  }

  useToastNotification({
    isActive: updatePostIsSuccess,
    title: 'Datos Actualizados',
  });

  useToastNotification({
    isActive: !!updatePostError,
    title: 'Error de conexión',
  });
  

  return ({
    createNewPost,
    editPost,
    deletePost,
    updatePostIsPending,
  });
};

export default useUpdatePost;
