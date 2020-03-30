import React, { useRef, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconDesign from 'react-native-vector-icons/AntDesign';

import Background from '~/components/Background';

import api from '~/services/api';

import {
  Container,
  CameraContainer,
  Camera,
  TakePictureButtonContainer,
  PictureImage,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function ConfirmDelivery({ navigation }) {
  const cameraRef = useRef(null);
  const [picture, setPicture] = useState('');

  const orderId = navigation.getParam('orderId');

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPicture(data);
    }
  }

  async function handleSubmit() {
    try {
      // eslint-disable-next-line no-undef
      const data = new FormData();
      data.append('file', {
        uri: picture.uri,
        type: 'image/jpeg',
        name: 'file',
      });

      const file = await api.post('/files', data);
      await api.put(`/orders/${orderId}/deliveries`, {
        signature_id: file.id,
      });

      Alert.alert('Assinatura cadastrado com sucesso! Pedido finalizado');
      navigation.navigate('Orders');
    } catch (err) {
      console.tron.log(err);
      Alert.alert('Erro no envio da asssinatura, tente mais tarde');
    }
  }

  return (
    <>
      <Background />
      <Container>
        <CameraContainer>
          {picture ? (
            <>
              <PictureImage source={{ uri: picture.uri }} />
              <SubmitButton color="red" onPress={() => setPictureUri('')}>
                <SubmitButtonText>Tirar outra Foto</SubmitButtonText>
              </SubmitButton>
            </>
          ) : (
            <>
              <Camera
                type={Camera.Constants.Type.back}
                autoFocus={Camera.Constants.AutoFocus.on}
                flashMode={Camera.Constants.FlashMode.off}
                ref={cameraRef}
              />
              <TakePictureButtonContainer onPress={handleTakePicture}>
                <IconDesign name="camera" color="#FFF" size={30} />
              </TakePictureButtonContainer>
            </>
          )}
        </CameraContainer>
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </>
  );
}

ConfirmDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar Entrega',
  headerLeft: ({ tintColor }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetails')}>
      <Icon name="chevron-left" size={20} color={tintColor} />
    </TouchableOpacity>
  ),
});
