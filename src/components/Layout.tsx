import { type ReactNode } from 'react';
import { css } from '@emotion/react';

const appCss = {
  app: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  }),
  appBar: css({
  }),
  children: css({
    width: '100%',
    padding: '16px',
    flexGrow: 1,
    maxWidth: '1840px',
  }),
};

type LayoutProps = {
  appBar: ReactNode,
  children: ReactNode,
};

const Layout = ({ appBar, children }: LayoutProps) => {
  return (
    <div css={appCss.app}>
      {appBar}
      <div css={appCss.children}>
        {children}
      </div>
    </div>
  )
}

export default Layout
