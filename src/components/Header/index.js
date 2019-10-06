import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetup" />
          </Link>
        </nav>

        <Profile>
          <div>
            <strong>Willian Passarelli</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="submit">Sair</button>
        </Profile>
      </Content>
    </Container>
  );
}
