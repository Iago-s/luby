import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.grayUltraLight};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 160;
  align-items: center;

  margin-top: -160px;
  position: relative;
`;

export const BoxContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Box = styled.View`
  width: 100%;
  height: 80;

  position: relative;

  background-color: ${({black}) => black ? colors.blackLight : colors.grayDark};
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;

  border: 3px solid ${colors.white};
  border-radius: 100px;
`;

export const PersonalInfos = styled.View`
  width: 100%;
  flex-direction: ${({row}) => row ? 'row' : 'column'};
  justify-content: ${({justify}) => justify ? justify : 'flex-start'};

  padding-top: ${({padding}) => padding ? padding : 30}px;
  padding-bottom: ${({padding}) => padding ? padding : 30}px;

  background-color: ${({color}) => color ? color : colors.grayDark};
`;

export const NumbersContainer = styled.TouchableOpacity`
  align-items: center;
`;