import React from 'react';

import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  page: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  page,
}: HeaderProps) => (
  <Container size={size} page={page}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {page === 'dashboard' ? (
          <Link to="/import">
            Importar
            <FiChevronRight size={16} />
          </Link>
        ) : (
          <Link to="/">
            Importar
            <FiChevronRight size={16} />
          </Link>
        )}
      </nav>
    </header>
  </Container>
);

export default Header;
