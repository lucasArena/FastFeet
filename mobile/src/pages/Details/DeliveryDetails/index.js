import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

import {
  Container,
  DeliveryInfo,
  DeliveryInfoTitle,
  DeliveryInfoText,
  DeliveryInfoSection,
  DeliveryContent,
  DeliveryContentTitle,
  DeliveryContentText,
  DeliveryActions,
  DeliveryActionsButton,
  ActionText,
} from './styles';

import Background from '~/components/Background';

import formatDate from '~/utils/formatDate';
import getStatus from '~/utils/getStatus';

export default function DeliveryDetails({ navigation }) {
  const delivery = navigation.getParam('delivery');

  const startDateFormatted = useMemo(() => {
    return formatDate(delivery.start_date);
  }, [delivery]);

  const endDateFormatted = useMemo(() => {
    return formatDate(delivery.end_date);
  }, [delivery]);

  const status = useMemo(() => {
    return getStatus(
      delivery.start_date,
      delivery.end_date,
      delivery.canceled_at
    );
  }, [delivery]);

  return (
    <>
      <Background />

      <Container>
        <DeliveryInfo>
          <DeliveryInfoTitle>
            <Icon name="truck" size={24} color="#7159c1" />
            <DeliveryInfoText>Informações da entrega</DeliveryInfoText>
          </DeliveryInfoTitle>

          <DeliveryContent>
            <DeliveryContentTitle>Destinatário</DeliveryContentTitle>
            <DeliveryContentText>{delivery.recipient.name}</DeliveryContentText>
          </DeliveryContent>

          <DeliveryContent>
            <DeliveryContentTitle>Endereço de entrega</DeliveryContentTitle>
            <DeliveryContentText>
              {delivery.recipient.street}
            </DeliveryContentText>
          </DeliveryContent>

          <DeliveryContent>
            <DeliveryContentTitle>Produto</DeliveryContentTitle>
            <DeliveryContentText>{delivery.product}</DeliveryContentText>
          </DeliveryContent>
        </DeliveryInfo>

        <DeliveryInfo>
          <DeliveryInfoTitle>
            <Icon name="calendar" size={24} color="#7159c1" />
            <DeliveryInfoText>Situação da entrega</DeliveryInfoText>
          </DeliveryInfoTitle>

          <DeliveryContent>
            <DeliveryContentTitle>Status</DeliveryContentTitle>
            <DeliveryContentText>{status}</DeliveryContentText>
          </DeliveryContent>

          <DeliveryInfoSection>
            <DeliveryContent>
              <DeliveryContentTitle>Data de retirada</DeliveryContentTitle>
              <DeliveryContentText>{startDateFormatted}</DeliveryContentText>
            </DeliveryContent>

            <DeliveryContent>
              <DeliveryContentTitle>Data de entrega</DeliveryContentTitle>
              <DeliveryContentText>{endDateFormatted}</DeliveryContentText>
            </DeliveryContent>
          </DeliveryInfoSection>
        </DeliveryInfo>
        <DeliveryActions>
          <DeliveryActionsButton
            onPress={() =>
              navigation.navigate('CreateProblem', { orderId: delivery.id })
            }
          >
            <IconDesign name="closecircleo" size={24} color="#E84840" />
            <ActionText>Informar Problema</ActionText>
          </DeliveryActionsButton>

          <DeliveryActionsButton
            onPress={() =>
              navigation.navigate('ViewProblems', { orderId: delivery.id })
            }
          >
            <IconFeather name="alert-circle" size={24} color="#EBC86B" />
            <ActionText>Visualizar Problemas</ActionText>
          </DeliveryActionsButton>

          <DeliveryActionsButton
            onPress={() =>
              navigation.navigate('ConfirmDelivery', { orderId: delivery.id })
            }
          >
            <IconDesign name="checkcircleo" size={24} color="#7159c1" />
            <ActionText>Confirmar Entrega</ActionText>
          </DeliveryActionsButton>
        </DeliveryActions>
      </Container>
    </>
  );
}

DeliveryDetails.navigationOptions = () => ({
  title: 'Detalhes da encomenda',
});
