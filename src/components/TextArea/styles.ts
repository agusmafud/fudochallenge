import { css } from '@emotion/react';

const textAreaCss = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '8px',
  }),
  inputWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid rgb(128, 128, 128)',
    backgroundColor: 'white',
    '&:focus-within': {
      outline: '2px solid rgba(0, 0, 255, 0.6)',
      outlineOffset: '-1px',
    },
  }),
  textArea: css({
    width: '100%',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '14px',
    border: 'none',
    resize: 'vertical',
    minHeight: '48px',
    fontFamily: 'inherit',
    outline: 'none',
  }),
  label: css({
    marginLeft: '12px',
    fontSize: '12px',
    fontWeight: 500,
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

export default textAreaCss;
