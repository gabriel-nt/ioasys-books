import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}

      <input title={name} name={name} id={name} ref={ref} {...rest} />
    </Container>
  );
};

const Input = forwardRef(InputBase);

export default Input;
