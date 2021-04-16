import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import colors from './colors';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({fontSize}) => fontSize ? fontSize : 20}px;
  font-weight: bold;
  color: ${({action}) => action ? colors.black : colors.white};

  text-transform: uppercase;

  margin-right: 5%;
`;

export const Text = styled.Text`
  font-size: ${({fontSize}) => fontSize ? fontSize : 18}px;
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
  color: ${({bold}) => bold ? colors.white : colors.texts};
  margin-right: ${({marginRight}) => marginRight ? marginRight : 0}px;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  line-height: 20;
  color: ${colors.texts};

  padding: 0 20px;
  text-align: ${({align}) => align ? align : 'left'};
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Mark = styled.View`
  width: 10px;
  height: 42px;
  
  margin-right: 10px;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${colors.yellow};
`;

export const List = styled.ScrollView`
  flex: 1;
  padding-top: 50px;
  background-color: ${colors.grayDark};
`;