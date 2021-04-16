import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 5%;
  background-color: ${colors.grayDark};
`;

export const Logo = styled.View`
  margin-top: 5%;
  margin-bottom: 15%;
`;

export const InputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 2.5%;
  margin-bottom: 5%;

  border: 1px solid ${colors.white};
  border-radius: 10px;
  background-color: ${colors.white};
`;

export const Input = styled.TextInput.attrs({placeholderTextColor: colors.grayLight})`
  width: ${({isError}) => isError ? '60%' : '100%'};

  color: ${colors.grayLight};
  font-size: 20px;
`;

export const ErrorMessage = styled.Text`
  width: 40%;

  font-size: 15px;
  font-weight: bold;
  color: ${colors.error};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5%;
  margin-bottom: 5%;

  border: 1px solid ${colors.yellow};
  border-radius: 10px;
  background-color: ${colors.yellow};
`;
