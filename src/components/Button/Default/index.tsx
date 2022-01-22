import { ButtonHTMLAttributes, ReactElement } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hover?: boolean;
  disabled?: boolean;
  children: ReactElement;
}

const Button = ({
  children,
  hover,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      {...rest}
      disabled={disabled}
      style={!hover ? { background: 'white' } : {}}
    >
      {children}
    </Container>
  );
};

export default Button;
