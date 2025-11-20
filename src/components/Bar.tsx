import type { ReactNode } from "react";
import { css } from '@emotion/react'

const barCss = {
  header: css({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '4px',
  }),
  spacer: (smallSpacer: boolean) => css({
    ...(smallSpacer
      ? { width: '40px' }
      : { flexGrow: 1 }
    )
  }),
};

type BarProps = {
  leftNode: ReactNode,
  rightNode?: ReactNode,
  smallSpacer?: boolean,
};

const Bar = ({
  leftNode,
  rightNode,
  smallSpacer = false,
}: BarProps) => {
  const hasRightNode = !!rightNode;

  return (
    <div css={barCss.header}>
      {leftNode}
      {hasRightNode && (
        <>
          <div css={barCss.spacer(smallSpacer)} />
          <div>{rightNode}</div>
        </>
      )}
    </div>
  );
}

export default Bar;
