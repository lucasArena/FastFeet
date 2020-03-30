import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
`;

export const DeliveryInfo = styled.View`
  border: 1px solid #eee;
  top: -140px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  min-height: 220px;
`;

export const DeliveryInfoTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const DeliveryInfoText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #7159c1;
`;

export const DeliveryContent = styled.View`
  margin-bottom: 20px;
`;

export const DeliveryInfoSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DeliveryContentTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #666;
`;

export const DeliveryContentText = styled.Text`
  color: #888;
`;

export const DeliveryActions = styled.View`
  border: 1px solid #eee;
  top: -140px;
  background: #f8f9fd;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  min-height: 100px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeliveryActionsButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: 12px;
  color: #999;
`;
