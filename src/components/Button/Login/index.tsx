import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading: boolean;
}

const ButtonLogin = ({ label, isLoading, ...rest }: ButtonLoginProps) => {
  return (
    <Container disabled={isLoading} {...rest}>
      <span>{label}</span>
    </Container>
  );
};

export default ButtonLogin;
