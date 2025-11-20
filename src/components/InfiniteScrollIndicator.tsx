import { css } from '@emotion/react';

import Button from './Button/Button';
import EndIndicator from './EndIndicator';
import Loading from './Loading';

const infiniteScrollIndicatorCss = {
  flex: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};

type InfiniteScrollIndicatorProps = {
  inViewRef: (node?: Element | null) => void,
  fetchNextPage: () => void,
  hasNextPage: boolean,
  isFetchingNextPage: boolean,
};

const InfiniteScrollIndicator = ({
  inViewRef,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: InfiniteScrollIndicatorProps) => {
  const getInnerNode = () => {
    if (isFetchingNextPage) return <Loading />;
    
    if (!hasNextPage) return <EndIndicator />;

    return (
      <div css={infiniteScrollIndicatorCss.flex}>
        <Button
          onClick={() => fetchNextPage()}
          ariaLabel='Cargar más posts'
          variant='primary'
        >
          Cargar más posts
        </Button>
      </div>
    );
  };

  return (
    <div ref={inViewRef}>
      {getInnerNode()}
    </div>
  );
}

export default InfiniteScrollIndicator;
