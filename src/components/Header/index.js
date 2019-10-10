import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="submit" onClick={handleSignOut}>
            <strong>Sair</strong>
          </button>
        </Profile>
      </Content>
    </Container>
  );
}
