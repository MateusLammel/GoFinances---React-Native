import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ ...rest }: Props) => {
  return <Container {...rest} />;
};
