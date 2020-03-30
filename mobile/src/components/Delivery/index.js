import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  DeliveryHeader,
  DeliveryHeaderText,
  DeliveryFooter,
  DeliveryFotterSection,
  DeliveryFotterSectionTitle,
  DeliveryFotterSectionText,
  DeliveryDeitailsButton,
  DeliveryDeitailsButtonText,
} from './styles';

import ProgressBar from '~/components/ProgressBar';

export default function Delivery({ delivery, navigation }) {
  const formattedDate = useMemo(() => {
    return format(parseISO(delivery.createdAt), 'dd/MM/yyyy');
  }, [delivery]);

  function handleNavigate() {
    navigation.navigate('DeliveryDetails', { delivery });
  }

  return (
    <Container>
      <DeliveryHeader>
        <Icon name="truck" size={24} color="#7159c1" />
        <DeliveryHeaderText>Encomenda {delivery.id}</DeliveryHeaderText>
      </DeliveryHeader>

      <ProgressBar delivery={delivery} />

      <DeliveryFooter>
        <DeliveryFotterSection>
          <DeliveryFotterSectionTitle>Data</DeliveryFotterSectionTitle>
          <DeliveryFotterSectionText>{formattedDate}</DeliveryFotterSectionText>
        </DeliveryFotterSection>
        <DeliveryFotterSection>
          <DeliveryFotterSectionTitle>Cidade</DeliveryFotterSectionTitle>
          <DeliveryFotterSectionText>{delivery.city}</DeliveryFotterSectionText>
        </DeliveryFotterSection>
        <DeliveryFotterSection>
          <DeliveryDeitailsButton onPress={handleNavigate}>
            <DeliveryDeitailsButtonText>
              Ver detalhes
            </DeliveryDeitailsButtonText>
          </DeliveryDeitailsButton>
        </DeliveryFotterSection>
      </DeliveryFooter>
    </Container>
  );
}
