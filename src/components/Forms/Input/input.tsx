import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps;

export const Input = ({ ...rest }: Props) => {
  return <Container {...rest} />;
};
