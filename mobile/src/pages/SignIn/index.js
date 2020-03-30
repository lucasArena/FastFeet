import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Wrapper,
  Content,
  Logo,
  Input,
  SignInButton,
  SignInButtonText,
} from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [id, setId] = useState('');

  function handleSignIn() {
    dispatch(signInRequest(id));
  }

  return (
    <Wrapper>
      <Content>
        <Logo source={logo} />
        <Input
          placeholder="Informe seu ID de cadastro"
          placeholderTextColor="#999999"
          onChangeText={setId}
          value={id}
        />
        <SignInButton onPress={handleSignIn}>
          {loading ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SignInButtonText>Entrar no sistema</SignInButtonText>
          )}
        </SignInButton>
      </Content>
    </Wrapper>
  );
}
