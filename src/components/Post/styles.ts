import { css } from '@emotion/react'

const postCss = {
  container: ({
    isBig,
    isClickable,
  }: {
    isBig: boolean,
    isClickable: boolean,
  }) => css({
    display: 'flex',
    flexDirection: 'column',
    gap: isBig ? '8px' : '4px',
    padding: '4px 16px',
    borderRadius: '16px',
    ...(isClickable && {
    cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#f6f6f6',
      },
      '&:has([data-menu-button]:hover)': {
        backgroundColor: 'transparent',
      },
    })
  }),
  headerLeft: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px'
  }),
  title: (isBig: boolean) => css({
    margin: '4px 0',
    color: 'rgb(24, 28, 31)',
    fontSize: isBig ? '24px' : '18px',
    fontWeight: 600,
  }),
  content: (isBig: boolean) => css({
    fontSize: isBig ? '18px' : '14px',
  }),
};

export default postCss;
