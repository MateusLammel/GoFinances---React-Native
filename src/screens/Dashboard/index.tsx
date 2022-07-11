import React, { useEffect, useState } from "react";
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
  LogoutButton,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
   
  }, []);
 console.log(data);
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
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
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
