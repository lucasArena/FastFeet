import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;
export const DeliverysTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
export const DeliveryText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
export const TypeDeliverySection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TypeDeliverySectionButton = styled(RectButton)`
  margin-right: 10px;
`;

export const TypeDeliverySectionText = styled.Text`
  font-weight: bold;
  color: #999;

  ${props =>
    props.enabled &&
    css`
      text-decoration: underline;
      color: #7159c1;
    `}
`;

export const DeliveryList = styled.FlatList.attrs({})`
  padding: 20px;
`;
