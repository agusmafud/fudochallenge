import { css } from '@emotion/react';

export const toastCss = {
  region: css({
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '8px',
    borderRadius: '8px',
    outline: 'none',
    '&[data-focus-visible]': {
      outline: '2px solid slateblue',
      outlineOffset: '2px',
    },
  }),
  toast: css({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: 'slateblue',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '8px',
    outline: 'none',
    '&[data-focus-visible]': {
      outline: '2px solid slateblue',
      outlineOffset: '2px',
    },
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    minWidth: 0,
  }),
  title: css({
    fontWeight: 'bold',
  }),
  closeButton: css({
    flex: '0 0 auto',
    background: 'none',
    border: 'none',
    appearance: 'none',
    borderRadius: '50%',
    height: '32px',
    width: '32px',
    fontSize: '16px',
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'white',
    padding: 0,
    outline: 'none',
    cursor: 'pointer',
    '&[data-focus-visible]': {
      boxShadow: '0 0 0 2px slateblue, 0 0 0 4px white',
    },
    '&[data-pressed]': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  }),
  closeIcon: css({
    cursor: 'pointer',
  }),
};

export default toastCss;

