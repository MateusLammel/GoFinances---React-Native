import React from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input/input";
import { Container, Fields, Form, Header, Title } from "./styles";

export const styles = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};
