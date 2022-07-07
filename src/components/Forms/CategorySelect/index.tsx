import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Category } from "../../TransactionCard/styles";
import { Container, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const CategorySelect= ({ ...rest }: Props) => {
  return <Container>;

    <Category></Category>
    <Icon name="chevron-down"></Icon>
    </Container>
};
