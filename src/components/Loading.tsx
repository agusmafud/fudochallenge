import { css } from '@emotion/react'

const loadingCss = {
  container: (isBig: boolean) => css({
    width: '90vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(isBig && { height: '40svh' })
  }),
  loading: css({
    width: '100px',
    height: '60px',
  }),
};

type LoadingProps = {
  isBig?: boolean,
};

const Loading = ({ isBig = false }: LoadingProps) => (
  <div css={loadingCss.container(isBig)}>
    <div css={loadingCss.loading}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <circle fill="#808" stroke="#808" strokeWidth="15" r="15" cx="40" cy="50">
          <animate attributeName="cy" calcMode="spline" dur="2" values="25;75;25;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4" />
        </circle>
        <circle fill="#808" stroke="#808" strokeWidth="15" r="15" cx="100" cy="50">
          <animate attributeName="cy" calcMode="spline" dur="2" values="25;75;25;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2" />
        </circle>
        <circle fill="#808" stroke="#808" strokeWidth="15" r="15" cx="160" cy="50">
          <animate attributeName="cy" calcMode="spline" dur="2" values="25;75;25;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0" />
        </circle>
      </svg>
    </div>
  </div>
);

export default Loading;
