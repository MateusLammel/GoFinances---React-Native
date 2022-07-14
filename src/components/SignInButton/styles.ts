import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.95,
})`
  flex-direction: row;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  align-items: center;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  padding: ${RFValue(16)}px;

  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1.2px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

`;
