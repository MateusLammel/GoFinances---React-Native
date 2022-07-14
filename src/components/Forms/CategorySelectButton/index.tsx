import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const CategorySelectButton = ({ onPress, title, ...rest }: Props) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Icon name="chevron-down"></Icon>
    </Container>
  );
};
