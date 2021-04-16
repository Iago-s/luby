import React from 'react';

import {Container} from './styles';

export default function Header({children, justify}) {
  return(
    <Container justify={justify}>
      {children}
    </Container>
  );
}