import { css } from '@emotion/react';

const newCommentCss = {
  textField: css({
    paddingTop: '8px',
    width: '100%',
    border: '1px solid rgb(128, 128, 128)',
    borderRadius: '16px',
  }),
  textArea: css({
    width: '100%',
    borderRadius: '16px',
    padding: '16px 12px',
    border: 'none',
    resize: 'vertical',
    minHeight: '48px',
    '&:focus':{
      outline: 'none',
    },
  }),
  buttonRow: css({
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '8px',
    paddingBottom: '4px',
  }),
  visuallyHidden: css({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
  }),
};

export default newCommentCss;
