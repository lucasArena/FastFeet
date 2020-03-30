import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  OrderIdentification,
  ProblemList,
  Problem,
  Description,
  CreatedAt,
} from './styles';

import Background from '~/components/Background';

import formatDate from '~/utils/formatDate';

import api from '~/services/api';

export default function ViewProblems({ navigation }) {
  const orderId = navigation.getParam('orderId');

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/orders/${orderId}/problems`);

      const formattedResponse = response.map(p => ({
        ...p,
        createdAt: formatDate(p.createdAt),
      }));
      setProblems(formattedResponse);
    }
    loadProblems();
  }, [orderId]);

  return (
    <>
      <Background />
      <Container>
        <OrderIdentification>Encomenda {orderId}</OrderIdentification>
        <ProblemList
          data={problems}
          keyExctrator={item => String(item.id)}
          renderItem={({ item }) => (
            <Problem>
              <Description>{item.description}</Description>
              <CreatedAt>{item.createdAt}</CreatedAt>
            </Problem>
          )}
        />
      </Container>
    </>
  );
}

ViewProblems.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar problemas',
  headerLeft: ({ tintColor }) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color={tintColor} />
    </TouchableOpacity>
  ),
});
