import { css } from '@emotion/react';
import React, { type ReactNode } from 'react';

import { ModalOverlay, OverlayTriggerStateContext } from 'react-aria-components';

const clickAwayOverlayCss = {
  modalOverlay: css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
    background: 'rgba(0,0,0,0.25)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  }),
};

const ClickAwayOverlay = ({ children }: { children: ReactNode }) => {
  const state = React.useContext(OverlayTriggerStateContext)!;

  return (
    <ModalOverlay css={clickAwayOverlayCss.modalOverlay} onClick={(e) => {
      e.stopPropagation();
      state.close();
      e.preventDefault();
      }}
    >
      {children}
    </ModalOverlay>
  );
};

export default ClickAwayOverlay;
