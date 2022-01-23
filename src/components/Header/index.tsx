import Button from '../Button/Default';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import Logo from '../../../public/images/logo.svg';

import { useAuth } from '../../hooks/auth';
import { Container, Profile } from './styles';

interface HeaderProps {
  mode?: 'dark' | 'light';
}

const Header = ({ mode = 'light' }: HeaderProps) => {
  const router = useRouter();
  const { signOut, user } = useAuth();

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

      {user && (
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
