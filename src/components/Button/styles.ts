import { css } from '@emotion/react';

export const buttonCommonStyles = {
  baseColor: {
    color: '#000',
    background: '#fff',
    '&:hover': {
      background: '#e6ebee',
    },
  },
  baseFormat: {
    padding: '8px 12px',
    borderRadius: '24px',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.5px',
  },
  bigFormat: {
    flexGrow: 1,
    padding: '14px 24px',
    borderRadius: '24px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.5px',
  },
};

const buttonCss = (isDisabled: boolean) => ({
  container: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: isDisabled ? 'not-allowed !important' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
    border: `1px solid ${isDisabled ? 'grey' : 'transparent'}`,
  }),

  variants: {
    primary: css({
      ...buttonCommonStyles.baseFormat,
      fontSize: '12px',
      color: '#fff',
      background: 'rgb(68, 70, 95)',
      ...(!isDisabled && {
        '&:hover': {
          background: '#333548',
        },
      })
    }),
    secondary: css({
      ...buttonCommonStyles.baseFormat,
      fontSize: '12px',
      color: '#000',
      background: 'rgb(230, 230, 251)',
      '&:hover': {
        background: '#dfdffa',
      },
    }),
    cancel: css({
      ...buttonCommonStyles.bigFormat,
      color: '#000',
      background: 'rgb(222, 226, 230)',
      '&:hover': {
        background: 'rgb(198, 198, 198)',
      },
    }),
    alertConfirm: css({
      ...buttonCommonStyles.bigFormat,
      color: '#fff',
      background: 'rgb(235, 0, 31)',
      '&:hover': {
        background: '#BC0117',
      },
    }),
    ghost: css({
      ...buttonCommonStyles.baseColor,
      ...buttonCommonStyles.baseFormat,
    }),
    icon: css({
      ...buttonCommonStyles.baseColor,
      width: '30px',
      height: '30px',
      padding: 0,
      borderRadius: '50%',
    }),
    disabled: css({
      ...buttonCommonStyles.baseColor,
      width: '30px',
      height: '30px',
      padding: 0,
      borderRadius: '50%',
    }),
  },
});

export default buttonCss;
