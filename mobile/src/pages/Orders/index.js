import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Container,
  DeliverysTitle,
  DeliveryText,
  TypeDeliverySection,
  TypeDeliverySectionButton,
  TypeDeliverySectionText,
  DeliveryList,
} from './styles';

import Header from '~/components/Header';
import Delivery from '~/components/Delivery';

import api from '~/services/api';

export default function Orders({ navigation }) {
  const profile = useSelector(state => state.user.profile);

  const [deliveries, setDeliveries] = useState([]);

  async function handlePendents() {
    const response = await api.get(`/deliveryguy/${profile.id}/pendents`);
    setDeliveries(response);
  }

  async function handleDeliveries() {
    const response = await api.get(`/deliveryguy/${profile.id}/deliveries`);
    setDeliveries(response);
  }

  useEffect(() => {
    handleDeliveries();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header profile={profile} />
        <DeliverysTitle>
          <DeliveryText>Entregas</DeliveryText>
          <TypeDeliverySection>
            <TypeDeliverySectionButton enabled onPress={handlePendents}>
              <TypeDeliverySectionText enabled>
                Pendentes
              </TypeDeliverySectionText>
            </TypeDeliverySectionButton>
            <TypeDeliverySectionButton onPress={handleDeliveries}>
              <TypeDeliverySectionText>Entregues</TypeDeliverySectionText>
            </TypeDeliverySectionButton>
          </TypeDeliverySection>
        </DeliverysTitle>

        <DeliveryList
          data={deliveries}
          keyExctrator={item => String(item.id)}
          renderItem={({ item }) => (
            <Delivery delivery={item} navigation={navigation} />
          )}
        />
      </Container>
    </Wrapper>
  );
}

Orders.navigationOptions = () => ({
  title: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="menu" size={24} color={tintColor} />
  ),
});
