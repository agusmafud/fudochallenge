import type { ReactNode } from 'react';
import { Button as ReactAriaButton } from 'react-aria-components';

import buttonCss from './styles';

type ButtonProps = {
  variant?: 
    'primary' | 'secondary'
    | 'ghost' | 'icon'
    | 'cancel' | 'alertConfirm',
  children: ReactNode,
  ariaLabel?: string,
  isDisabled?: boolean,
  dataName?: string,
  slot?: string,
  onClick?: () => void,
};

const Button = ({
  children,
  ariaLabel,
  dataName,
  slot,
  variant = 'primary',
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  const theme = buttonCss(isDisabled);
  const variantStyles = theme.variants[variant];

  return (
    <ReactAriaButton
      onClick={onClick}
      css={[theme.container, variantStyles]}
      isDisabled={isDisabled}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      {...!!dataName && { [dataName]: true }}
      {...!!slot && { [slot]: true }}
    >
      {children}
    </ReactAriaButton>
  )};

export default Button;
