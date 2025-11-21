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
  const handleCreateResponse = (comment: Partial<TComment>) => {
    createNewComment({
      ...comment,
      parentId: id,
    });
    setShowResponse(false);
  };
  

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
              { text: 'Responder', onAction: () => setShowResponse(true) },
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
            <div css={nestedCommentCss.commentContainer(hasChildren)}>
              <NewComment
                onCreate={handleCreateResponse}
                parentId={id}
                onCancel={() => setShowResponse(false)}
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
                <NestedComment {...props} nestedComment={childrenNestedComment} />
              </div>
            )})}
        </div>
      </div>
    </div>
  );
};

export default NestedComment;
