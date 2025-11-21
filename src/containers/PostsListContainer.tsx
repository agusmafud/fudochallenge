
import PostsPages from '../components/PostsPages';
import Loading from '../components/Loading';
import InfiniteScrollIndicator from '../components/InfiniteScrollIndicator';
import useInfiniteScrollFetch from '../hooks/api/useInfiniteScrollFetch';
import useUpdatePost from '../hooks/useUpdatePost';
import type { Post as TPost } from '../types';

const PostsListContainer = () => {
  const baseUrl = 'https://665de6d7e88051d60408c32d.mockapi.io';
  const postsUrl = `${baseUrl}/post`;
  const postsQueryKey = ['posts'];
  const pageLimit = 5;
  const initialPageParam = 1;

  const {
    data: postsData,
    error: postsError,
    fetchNextPage: postsFetchNextPage,
    hasNextPage: postsHasNextPage,
    isFetchingNextPage: postsIsFetchingNextPage,
    status: postsStatus,
    inViewRef: postsInViewRef,
  } = useInfiniteScrollFetch<TPost>({
    url: postsUrl,
    queryKey: postsQueryKey,
    pageLimit,
    initialPageParam,
  });

  const {
    //editPost,
    deletePost,
  } = useUpdatePost();

  if (postsStatus === 'pending') {
    return <Loading isBig />;
  }

  if (postsStatus === 'error' && postsError?.message) {
    <p>Error: {postsError.message}</p>
  }

  return (
    <>
      <PostsPages
        postsPages={postsData?.pages}
        deletePost={deletePost}
      />
      <InfiniteScrollIndicator
        inViewRef={postsInViewRef}
        fetchNextPage={postsFetchNextPage}
        hasNextPage={postsHasNextPage}
        isFetchingNextPage={postsIsFetchingNextPage}
      />
    </>
  );
};

export default PostsListContainer;
