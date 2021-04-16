import styled from 'styled-components';
import colors from '../../styles/colors';

export const Repo = styled.View`
  padding: 20px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grayUltraLight};
`;

export const DevImage = styled.Image`
  width: 70px;
  height: 70px;

  margin-left: 10px;
  margin-right: 40px;

  border: 3px solid ${colors.white};
  border-radius: 80px;
`;