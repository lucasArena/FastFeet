import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextArea, SubmitButton, SubmitButtonText } from './styles';

import Background from '~/components/Background';

import api from '~/services/api';

export default function CreateProblem({ navigation }) {
  const [description, setDescription] = useState('');
  const orderId = navigation.getParam('orderId');

  async function handleSubmit() {
    await api.post(`/orders/${orderId}/problems`, {
      description,
    });
    navigation.navigate('DeliveryDetails');
  }

  return (
    <>
      <Background />
      <Container>
        <TextArea
          multiline
          numberOfLines={30}
          value={description}
          onChangeText={setDescription}
          placeholder="Inclua aqui o problema que ocorreu na entrega"
          style={{
            textAlignVertical: 'top',
          }}
        />
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </>
  );
}

CreateProblem.navigationOptions = ({ navigation }) => ({
  title: 'Informar problemas',
  headerLeft: ({ tintColor }) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color={tintColor} />
    </TouchableOpacity>
  ),
});
