import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button} from './styles';

export default function BackAndNextButton({iconName, iconSize, iconColor, onPress}) {
  return(
    <Button onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor}/>
    </Button>
  );
}