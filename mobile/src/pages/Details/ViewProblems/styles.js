import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: -125px;
`;

export const OrderIdentification = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const ProblemList = styled.FlatList`
  flex: 1;
  margin-top: 10px;
`;

export const Problem = styled.View`
  background: #fff;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 4px;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const CreatedAt = styled.Text`
  color: #666;
`;
