import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';

import {
  Wrapper,
  Container,
  Image,
  InfoGroup,
  InfoTitle,
  InfoContent,
  SignOutButton,
  SignOutButtonText,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const formattedDate = useMemo(() => {
    const { created_at } = profile;
    return format(parseISO(created_at), 'dd/MM/yyyy');
  }, [profile]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <Container>
        <Image
          source={{
            uri: profile.avatar
              ? profile.avatar.url
              : 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
        <InfoGroup>
          <InfoTitle>Nome completo</InfoTitle>
          <InfoContent>{profile.name}</InfoContent>
        </InfoGroup>

        <InfoGroup>
          <InfoTitle>Email</InfoTitle>
          <InfoContent>{profile.email}</InfoContent>
        </InfoGroup>

        <InfoGroup>
          <InfoTitle>Data de cadastro</InfoTitle>
          <InfoContent>{formattedDate}</InfoContent>
        </InfoGroup>
        <SignOutButton onPress={handleSignOut}>
          <SignOutButtonText>Logout</SignOutButtonText>
        </SignOutButton>
      </Container>
    </Wrapper>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  title: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
});
