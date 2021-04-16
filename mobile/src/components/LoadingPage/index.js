import React from 'react';
import {ActivityIndicator} from 'react-native';

import colors from '../../styles/colors';
import {Container} from './styles.js';

export default function LoadingPage() {
  return(
    <Container>
      <ActivityIndicator color={colors.yellow} size={30}/>
    </Container>
  );
}