import { Fragment } from 'react';
import { css } from '@emotion/react'
import { Separator } from 'react-aria-components';
import { Link } from 'react-router';

import Post from './Post/Post';
import type { Post as TPost } from "../types";

const postsPagesCss = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    marginBottom: '16px',
  }),
};

type TPostsPages = TPost[][];
type PostsPagesProps = {
  postsPages?: TPostsPages,
  deletePost: (postId: string) => void,
};

const PostsPages = ({
  postsPages,
  deletePost,
}: PostsPagesProps) => {
  if (!postsPages) return null;

  return (
    <div css={postsPagesCss.container}>
      {postsPages.map((page, postsPagesIndex) => (
        <Fragment key={postsPagesIndex}>
          {page.map((post, pageIndex) => {
            const isLastElement = (
              postsPagesIndex + 1 >= postsPages.length
              && pageIndex + 1  >= page.length
            );

            return (
              <Fragment key={post.id}>
                <Link
                  to={`/posts/${post.id}`}
                  style={{ textDecoration: 'none', color: '#000'}}
                >
                  <Post
                    post={post}
                    deletePost={deletePost}
                  />
                </Link>
                {!isLastElement && <div><Separator orientation="horizontal" /></div>}
              </Fragment>
            )

          })}
        </Fragment>
      ))} 
    </div>
  );
};

export default PostsPages;
