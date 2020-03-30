import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 0 20px;
  flex-direction: column;
`;

export const TextArea = styled.TextInput`
  background: #fff;
  padding: 15px;
  font-size: 16px;
  margin-top: -60px;
  flex: 1;
  min-height: 400px;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 20px;
  background: #7159c1;
  border-radius: 4px;
`;

export const SubmitButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
`;
