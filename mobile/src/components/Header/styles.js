import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: ${({justify}) => justify ? justify : 'space-between'};
  align-items: center;

  padding: 5%;
  background-color: ${colors.blackLight};
`;