import { css } from '@emotion/react'

const userInputCss = {
  header: css({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }),
  avatar: (isBig: boolean) => css({
    width: isBig ? '32px' : '24px',
    height: isBig ? '32px' : '24px',
    borderRadius: '50%',
    objectFit: 'cover',
  }),
  name: css({
    color: 'rgb(51, 61, 66)',
    fontSize: '12px',
    fontWeight: 700,
  }),
  time: css({
    color: 'rgb(92, 108, 116)',
    fontSize: '12px',
  }),
  spacer: css({
    flexGrow: 1,
  }),
};

export default userInputCss;
