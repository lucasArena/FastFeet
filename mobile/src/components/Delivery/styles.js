import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const DeliveryHeaderText = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #7159c1;
`;

export const DeliveryFooter = styled.View`
  background: #eee;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeliveryFotterSection = styled.View``;

export const DeliveryFotterSectionTitle = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const DeliveryFotterSectionText = styled.Text`
  font-weight: bold;
`;

export const DeliveryDeitailsButton = styled(RectButton)`
  margin-top: auto;
`;

export const DeliveryDeitailsButtonText = styled.Text`
  font-weight: bold;
  color: #7159c1;
`;
