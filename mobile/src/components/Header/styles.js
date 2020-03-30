import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 84px;
  height: 84px;
  border-radius: 42px;
  background: #666;
  margin-right: 20px;
`;

export const HeaderInfo = styled.View``;

export const HeaderInfoWelcome = styled.Text`
  color: #999;
`;
export const HeaderInfoName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const SignOutButton = styled(RectButton)`
  margin-right: 5px;
`;
