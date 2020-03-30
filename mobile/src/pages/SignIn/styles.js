import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #7d40e7;
  display: flex;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0 30px;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
  align-self: center;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 15px;
  color: #999;
`;

export const SignInButton = styled(RectButton)`
  background: #82bf18;
  border-radius: 4px;
  align-self: stretch;
  padding: 10px 15px;
`;

export const SignInButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
