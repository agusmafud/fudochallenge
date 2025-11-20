import { css } from '@emotion/react';

const alertDialogCss = {
  dialogBox: css({
    maxWidth: '460px',
    maxHeight: '100%',
    overflow: 'hidden',
    borderRadius: '16px',
    background: '#fff',
    padding: '16px 16px 24px',
    boxShadow: '0 10px 32px 0 rgba(0,0,0,0.14), 0 1.5px 4.5px 0 rgba(0,0,0,0.09)',
    position: 'relative',
  }),
  dialogCentered: css({
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }),
  header: css({
    display: 'flex',
    margin: 0,
    color: 'rgb(51, 61, 66)',
    fontSize: '18px',
    textAlign: 'center'
  }),
  spacer: css({
    flexGrow: 1,
  }),
  children: css({
    margin: '24px 0',
    fontSize: '14px',
    color: 'rgb(49, 54, 58)',
  }),
  buttons: css({
    display: 'flex',
    gap: 16,
  }),
};

export default alertDialogCss;
