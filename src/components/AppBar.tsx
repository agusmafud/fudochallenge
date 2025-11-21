import type { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router';
import { Squirrel } from 'lucide-react';

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
    padding: '0 8px',
    zIndex: 100,
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
  link: css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'inherit',
  }),
};

const AppBar = ({ children }: { children: ReactNode }) => (
  <div css={appCss.appBar}>
    <Link to='/' css={appCss.link}>
      <Squirrel css={appCss.icon} />
      <div css={appCss.brand}>rodent</div>
    </Link>
    <div css={appCss.spacer} />
    {children}
  </div>
);

export default AppBar;
