import { useMemo } from 'react';

import useFetch from './api/useFetch';
import type { Comment, NestedComment } from '../types';

const useNestedComments = (postId: string) => {
  const baseUrl = 'https://665de6d7e88051d60408c32d.mockapi.io';
  const commentsUrl = `${baseUrl}/post/${postId}/comment`;
  const commentsQueryKey = ['comments', postId];

  const {
    data: comments,
    error: commentsError,
    isPending: commentsIsPending,
    isError: commentsIsError,
  } = useFetch<Comment[]>({
    url: commentsUrl,
    queryKey: commentsQueryKey,
    fallBackResponse: [],
  });

  const nestedComments = useMemo<NestedComment[]>(() => {
    if (!comments) return [];

    const lookup: Record<string, NestedComment> = {};
    const newComments = comments.reduce<NestedComment[]>((acc, comment) => {
      const node = { ...comment, children: [] };
      lookup[comment.id] = node;
      if (comment.parentId !== null && lookup[comment.parentId]) {
        lookup[comment.parentId].children.push(node);
      } else {
        acc.push(node);
      }
      return acc;
    }, []);

    return newComments;
  }, [comments]);

  return ({
    comments: nestedComments,
    commentsError,
    commentsIsPending,
    commentsIsError,
  });
};

export default useNestedComments;
