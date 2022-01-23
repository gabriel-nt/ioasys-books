import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';

import Button from '../Button/Default';
import { useAuth } from '../../hooks/auth';

import { Container, Profile } from './styles';
import Logo from '../../../public/images/logo.svg';

interface HeaderProps {
  mode?: 'dark' | 'light';
  shouldMatchExactPage?: string;
}

const Header = ({
  mode = 'light',
  shouldMatchExactPage = '/home',
}: HeaderProps) => {
  const router = useRouter();
  const { signOut, user } = useAuth();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (shouldMatchExactPage === router.asPath) {
      setIsActive(true);
    }
  }, [shouldMatchExactPage, router, isActive]);

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  return (
    <Container mode={mode}>
      <div className="logo">
        <Logo />
        <span>Books</span>
      </div>

      <h1>ioasys Books</h1>

      {user && isActive && (
        <Profile>
          <p>
            Bem vindo(a), <strong>{user.name}!</strong>
          </p>
          <Button onClick={handleSignOut} arial-label="Deslogar">
            <FiLogOut />
          </Button>
        </Profile>
      )}
    </Container>
  );
};

export default Header;
