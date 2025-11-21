import { TextField as ReactAriaTextField, Label, Input } from 'react-aria-components';

import textFieldCss from './styles';

type TextFieldProps = {
  value: string,
  label: string,
  onChange: (value: string) => void,
};

const TextField = ({ 
  value,
  label,
  onChange,
}: TextFieldProps) => (
  <ReactAriaTextField
    value={value}
    onChange={onChange}
    css={textFieldCss.container}
  >
    <Label css={textFieldCss.label}>{label}</Label>
    <Input css={textFieldCss.input} />
  </ReactAriaTextField>
);

export default TextField;
