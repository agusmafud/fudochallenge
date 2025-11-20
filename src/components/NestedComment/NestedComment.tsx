import { useState } from "react";

import ActionMenu from "../ActionMenu/ActionMenu";
import Bar from "../Bar";
import UserInputHeader from "../UserInputHeader/UserInputHeader";
import NewComment from "../NewComment/NewComment";
import type { NestedComment as TNestedComment, Comment as TComment } from '../../types';

import nestedCommentCss from './styles';

type NestedCommentProps = {
  nestedComment: TNestedComment,
  createNewComment: (comment: Partial<TComment>) => void,
  editComment: (comment: Partial<TComment>) => void,
  deleteComment: (commentId: string) => void,
};

const NestedComment = (props: NestedCommentProps) => {
  const [showResponse, setShowResponse] = useState(false);

  if (!props?.nestedComment) return null;
  const { 
    nestedComment,
    createNewComment,
    // editComment,
    deleteComment,
  } = props;
  
  const {
    id,
    createdAt,
    name,
    avatar,
    content,
    children,
  } = nestedComment;

  const hasChildren = children.length > 0;
  /* const handleEditComment = (comment: Partial<TComment>) => (
    editComment({
      id,
      ...comment,
    })
  ); */
  const handleCreateResponse = (comment: Partial<TComment>) => (
    createNewComment({
      ...comment,
      parentId: id,
    })
  );
  

  return (
    <div css={nestedCommentCss.container}>
      <Bar
        smallSpacer
        leftNode={
          <UserInputHeader
            createdAt={createdAt}
            name={name}
            avatar={avatar}
            isBig
          />
        }
        rightNode={
          <ActionMenu
            menuItems={[
              // { text: 'Editar', onAction: () => alert('Edit') },
              { text: 'Comentar', onAction: () => setShowResponse(true) },
              { text: 'Borrar', onAction: () => deleteComment(id) },
            ]}
            dataName='data-menu-button'
          />
        }
      />
      <div css={nestedCommentCss.flexContainer}>
        <div css={nestedCommentCss.commentWrapper}>
          <div css={nestedCommentCss.contentContainer(hasChildren)}>
            <div css={nestedCommentCss.contentText}>{content}</div>
          </div>
          {showResponse && (
            <div css={nestedCommentCss.commentContainer}>
              <NewComment
                onCreate={handleCreateResponse}
                parentId={id}
              />
            </div>
          )}
          {children.map((childrenNestedComment, index) => {
            const isLastChild = index + 1 === children.length;

            return (
              <div key={childrenNestedComment.id} css={nestedCommentCss.childContainer(isLastChild)}>
                <div css={nestedCommentCss.connectorWrapper(isLastChild)}>
                  <div css={nestedCommentCss.connector} />
                </div>
                <NestedComment {...props} />
              </div>
            )})}
        </div>
      </div>
    </div>
  );
};

export default NestedComment;
