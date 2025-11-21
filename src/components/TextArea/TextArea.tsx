import { type ReactNode } from 'react';
import { TextField, TextArea  as ReactAriaTextArea, Label } from 'react-aria-components';

import textAreaCss from './styles';

type TextAreaProps = {
  value: string,
  label: string,
  children?: ReactNode,
  onChange: (value: string) => void,
  isLabelVisible?: boolean,
};

const TextArea = ({ 
  value,
  label,
  children,
  onChange,
  isLabelVisible = false,
}: TextAreaProps) => (
  <TextField css={textAreaCss.container}>
    <Label css={isLabelVisible ? textAreaCss.label : textAreaCss.visuallyHidden}>{label}</Label>
    <div css={textAreaCss.inputWrapper}>
      <ReactAriaTextArea
        css={textAreaCss.textArea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
      {children}
    </div>
  </TextField>
);

export default TextArea;
