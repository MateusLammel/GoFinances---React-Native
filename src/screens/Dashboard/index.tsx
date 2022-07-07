import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
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
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de sistema",
      amount: "R$ 17.000,00",
      category: {
        name: "Entrada",
        icon: "dollar-sign",
      },
      date: "12/03/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Desenvolvimento de sistema",
      amount: "R$ 200,00",
      category: {
        name: "Alimentação",
        icon: "coffe",
      },
      date: "12/03/2022",
    },
    {
      id: "3",
      type: "positive",
      title: "Desenvolvimento de sistema",
      amount: "R$ 12.000,00",
      category: {
        name: "Entrada",
        icon: "shopping-bag",
      },
      date: "12/03/2022",
    },
  ];

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

        <TransactionList
          data={data}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionCard data={item}></TransactionCard>
          )}
        />
      </Transactions>
    </Container>
  );
};
