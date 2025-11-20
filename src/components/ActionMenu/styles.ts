import { css } from '@emotion/react';

const actionMenuCss = {
  menuButton: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    padding: 0,
    borderRadius: '50%',
    background: '#fff',
    cursor: 'pointer',
    border: 'none',
    '&:hover': {
      background: '#e6ebee',
    },
  }),
  menu: css({ 
    minWidth: '150px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }),
  menuItem: ({ isFirstItem, isLastItem }: { isFirstItem: boolean, isLastItem: boolean }) => css({
    cursor: 'pointer',
    padding: '8px',
    borderTopRightRadius: isFirstItem ? '8px' : 0,
    borderTopLeftRadius: isFirstItem ? '8px' : 0,
    borderBottomRightRadius: isLastItem ? '8px' : 0,
    borderBottomLeftRadius: isLastItem ? '8px' : 0,
    fontSize: '14px',
    '&[data-focused]': {
      background: '#f6f6f6',
    }
  }),
};

export default actionMenuCss;
