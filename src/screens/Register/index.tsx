import React from "react";
import { Input } from "../../components/Forms/Input/input";
import { Container, Form, Header, Title } from "./styles";

export const styles = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Form>
    </Container>
  );
};
