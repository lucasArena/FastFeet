import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin: 14px 0;
`;

export const ProgressContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const Ball = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid #7159c1;
  background: ${props => (props.checked ? '#7159c1' : '#FFF')};
`;

export const Bar = styled.View`
  height: 1px;
  flex: 1;
  background: #7159c1;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  margin-top: 5px;
`;

export const StatusText = styled.Text`
  font-size: 12px;
  max-width: 70px;
  color: #999;
  text-align: center;
  flex: 1;
`;
