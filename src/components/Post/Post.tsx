import type { ReactNode } from "react";

import ActionMenu from '../ActionMenu/ActionMenu';
import UserInputHeader from "../UserInputHeader/UserInputHeader";
import Bar from "../Bar";
import type { Post as TPost } from "../../types";

import postCss from './styles';

type PostProps = {
  post?: TPost,
  isBig?: boolean,
  isClickable?: boolean,
  beforeNode?: ReactNode,
  deletePost: (postId: string) => void,
};

const Post = ({
  post,
  isBig = false,
  isClickable = false,
  beforeNode = null,
  deletePost,
}: PostProps) => {
  if (!post) return null;

  const {
    id,
    createdAt,
    name,
    avatar,
    content,
    title,
  } = post;

  return (
    <div css={postCss.container({ isClickable, isBig })}>
      <Bar
        leftNode={
          <div css={postCss.headerLeft}>
            {beforeNode}
            <UserInputHeader
              createdAt={createdAt}
              name={name}
              avatar={avatar}
              isBig={isBig}
            />
          </div>
        }
        rightNode={
          <ActionMenu
            menuItems={[
              { text: 'Delete', onAction: () => deletePost(id) },
            ]}
            dataName='data-menu-button'
            ariaLabel={`Menu post id: ${post.id}`}
          />
        }
      />
      <div css={postCss.title(isBig)}>{title}</div>
      <div css={postCss.content(isBig)}>{content}</div>
    </div>
  );
}

export default Post;
