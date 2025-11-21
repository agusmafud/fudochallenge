import { css } from '@emotion/react';

const textFieldCss = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  }),
  input: css({
    width: '100%',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid rgb(128, 128, 128)',
    fontSize: '14px',
    '&:focus': {
      outline: '2px solid rgba(0, 0, 255, 0.6)', 
      outlineOffset: '-1px',
    },
  }),
  label: css({
    marginLeft: '12px',
    fontSize: '12px',
    fontWeight: 500,
  }),
};

export default textFieldCss;
