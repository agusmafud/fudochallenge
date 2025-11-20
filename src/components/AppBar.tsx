import { css } from '@emotion/react';
import { MessageSquarePlus, Squirrel } from 'lucide-react';

import Button from './Button/Button';

const appCss = {
  appBar: css({
    width: '100%',
    height: '60px',
    position: 'sticky',
    top: 0,
    background: '#fff',
    borderBottom: '1px solid rgb(128, 128, 128)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0 8px',
  }),
  spacer: css({
    flexGrow: 1,
  }),
  icon: css({
    width: '32px',
    height: '32px',
  }),
  brand: css({
    fontSize: '24px',
    fontWeight: 600,
  }),
};

const AppBar = () => (
  <div css={appCss.appBar}>
    <Squirrel css={appCss.icon} />
    <div css={appCss.brand}>rodent</div>
    <div css={appCss.spacer} />
    <div>
      <Button
        variant='ghost'
        ariaLabel='Crear Post'
      >
        <MessageSquarePlus />
        Crear
      </Button>
    </div>
  </div>
);

export default AppBar;
