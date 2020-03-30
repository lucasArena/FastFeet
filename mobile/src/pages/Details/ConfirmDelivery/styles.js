import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  margin: 30px;
  margin-top: -150px;
`;

export const CameraContainer = styled.View`
  height: 550px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const TakePictureButtonContainer = styled(RectButton)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin-top: -80px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const PictureImage = styled.Image`
  flex: 1;
`;

export const SubmitButton = styled(RectButton)`
  background: ${props => (props.color ? props.color : '#7159c1')};
  padding: 15px 20px;
  margin-top: 35px;
  border-radius: 4px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
