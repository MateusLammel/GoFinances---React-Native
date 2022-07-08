import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Category } from "../../TransactionCard/styles";
import { Container, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const CategorySelectButton = ({ onPress, title, ...rest }: Props) => {
  return (
    <Container onPess={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down"></Icon>
    </Container>
  );
};
