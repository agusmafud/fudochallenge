import { css } from '@emotion/react'
import { Squirrel } from 'lucide-react';

const endIndicatorCss = {
  container: css({
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  }),
  icon: css({
    width: '80px',
    height: '80px',
  }),
  text: css({
    fontSize: '24px',
  }),
};

const EndIndicator = () => (
  <div css={endIndicatorCss.container}>
    <Squirrel
      css={endIndicatorCss.icon}
    />
    <div css={endIndicatorCss.text}>¡Estás al día!</div>
  </div>
);

export default EndIndicator;
