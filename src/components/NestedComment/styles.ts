import { css } from '@emotion/react';

const nestedCommentCss = {
  container: css({
    width: '100%',
  }),
  flexContainer: css({
    display: 'flex',
  }),
  commentWrapper: css({
    marginBottom: '12px',
    width: '100%',
  }),
  contentContainer: (hasChildren: boolean) => css({
    marginLeft: '16px',
    display: 'flex',
    paddingTop: '12px',
    ...(hasChildren && { paddingBottom: '24px', borderLeft: '1px solid grey' }),
  }),
  contentText: css({
    marginLeft: '20px',
    paddingTop: '12px',
  }),
  commentContainer: (hasChildren: boolean) => css({
    marginLeft: '16px',
    paddingLeft: '24px',
    paddingBottom: '24px',
    ...(hasChildren && { borderLeft: '1px solid grey'}),
  }),
  childContainer: (isLastChild: boolean) => css({
    marginLeft: '16px',
    display: 'flex',
    ...(!isLastChild && { borderLeft: '1px solid grey' }),
  }),
  connectorWrapper: (isLastChild: boolean) => css({
    width: '32px',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    ...(isLastChild ? { marginLeft: 0 } : { marginLeft: '-1px' }),
  }),
  connector: css({
    width: '100%',
    height: '16px',
    cursor: 'pointer',
    borderLeft: '1px solid grey',
    borderBottom: '1px solid grey',
    borderBottomLeftRadius: '8px',
  }),
};

export default nestedCommentCss;
