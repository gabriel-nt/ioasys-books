import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isDisabled: boolean;
}

const ButtonLogin = ({ label, isDisabled, ...rest }: ButtonLoginProps) => {
  return (
    <Container disabled={isDisabled} {...rest}>
      <span>{label}</span>
    </Container>
  );
};

export default ButtonLogin;
