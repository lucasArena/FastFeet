import React from 'react';

import {
  Wrapper,
  ProgressContainer,
  StatusContainer,
  StatusText,
  Ball,
  Bar,
} from './styles';

export default function ProgressBar({ delivery }) {
  return (
    <Wrapper>
      <ProgressContainer>
        <Ball checked />
        <Bar />
        <Ball checked={delivery.start_date} />
        <Bar />
        <Ball checked={delivery.end_date} />
      </ProgressContainer>
      <StatusContainer>
        <StatusText>Aguardando Retirada</StatusText>
        <StatusText>Retirada</StatusText>
        <StatusText>Entregue</StatusText>
      </StatusContainer>
    </Wrapper>
  );
}
