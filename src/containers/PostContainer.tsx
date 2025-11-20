import { useParams, useNavigate } from 'react-router';
import { ArrowBigLeft } from 'lucide-react';
import { css } from '@emotion/react';

import Post from '../components/Post/Post';
import Loading from '../components/Loading';
import NewComment from '../components/NewComment/NewComment';
import NestedComment from '../components/NestedComment/NestedComment';
import Button from '../components/Button/Button';
import useFetch from '../hooks/api/useFetch';
import useComment from '../hooks/useUpdateComment';
import useNestedComments from '../hooks/useNestedComments';
import useUpdatePost from '../hooks/useUpdatePost';
import type { Post as TPost } from '../types';

const PostContainer = () => {
  const { postId = '' } = useParams();
  const navigate = useNavigate();

  const baseUrl = 'https://665de6d7e88051d60408c32d.mockapi.io';
  const postUrl = `${baseUrl}/post/${postId}`;
  const postQueryKey = ['posts', postId];

  const {
    data: postData,
    error: postError,
    isPending: postIsPending,
    isError: postIsError,
  } = useFetch<TPost>({
    url: postUrl,
    queryKey: postQueryKey,
  });

  const {
    comments,
  } = useNestedComments(postId);

  const {
    createNewComment,
    editComment,
    deleteComment,
  } = useComment(postId);

  const {
    // createNewPost,
    // editPost,
    deletePost,
  } = useUpdatePost();
  
  const styles = {
    container: css({
      display: 'flex',
      flexDirection: 'column',
      gap: '36px',
      marginTop: '12px',
    }),
    commentsContainer: css({
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    }),
  };

  if (postIsPending) return <Loading isBig />;

  if (postIsError && postError?.message) {
    <p>Error: {postError.message}</p>
  }

  return (
    <div css={styles.container}>
      <Post
        beforeNode={(
          <Button
              variant='icon'
              ariaLabel='Volver a los posts'
              onClick={() => navigate('/')}
          >
            <ArrowBigLeft />
          </Button>
        )}
        post={postData}
        isBig
        deletePost={deletePost}
      />
      <NewComment
        onCreate={createNewComment}
        parentId={null}
      />
      <div css={styles.commentsContainer}>
        {comments.map((comment) => (
          <NestedComment
            key={comment.id}
            nestedComment={comment}
            createNewComment={createNewComment}
            editComment={editComment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
