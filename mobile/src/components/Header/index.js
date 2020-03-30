import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import {
  Container,
  Left,
  Avatar,
  HeaderInfo,
  HeaderInfoWelcome,
  HeaderInfoName,
  SignOutButton,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header({ profile }) {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: profile.avatar
              ? profile.avatar.url
              : `https://api.adorable.io/avatar/50/${profile.name}`,
          }}
        />
        <HeaderInfo>
          <HeaderInfoWelcome>Bem vindo de volta,</HeaderInfoWelcome>
          <HeaderInfoName>{profile.name}</HeaderInfoName>
        </HeaderInfo>
      </Left>
      <SignOutButton onPress={handleSignOut}>
        <Icon name="exit-to-app" color="#E84840" size={24} />
      </SignOutButton>
    </Container>
  );
}
