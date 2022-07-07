import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HighlightCard } from "../../components/HighlightCard";
import { Title } from "../../components/HighlightCard/styles";
import {
  Container,
  Header,
  Photo,
  User,
  UserGreetings,
  UserInfo,
  UserName,
  UserWrapper,
  Icon,
  HighLightCardContainer,
  Transactions,
  TitleList,
} from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/92732240?v=4",
              }}
            />

            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Mateus</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighLightCardContainer>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última entrada dia 13"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 2.000,00"
          lastTransaction="Última entrada dia 11"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 15.000,00"
          lastTransaction="Última entrada dia 11"
        />
      </HighLightCardContainer>

      <Transactions>
        <TitleList>Listagem</TitleList>
      </Transactions>
    </Container>
  );
};
