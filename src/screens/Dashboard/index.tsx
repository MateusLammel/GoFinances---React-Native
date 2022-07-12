import React, { useCallback, useEffect, useState } from "react";
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
  LoadContainer,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighLightProps {
  amount: string;
}
interface HighLightData {
  entries: HighLightProps;
  expenses: HighLightProps;
  total: HighLightProps;
}

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highLightData, setHighLightData] = useState<HighLightData>(
    {} as HighLightData
  );
  const theme = useTheme();

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensesTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {

        console.log(item)
        if (item.type === "up") {
          entriesTotal += Number(item.amount);
        } else {
          expensesTotal += Number(item.amount);
        }

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
    setTransactions(transactionsFormatted);

    const lastTransactionEntries = Math.max.apply(
      Math,
      transactions
        .filter((transaction: DataListProps) => transaction.type === "up")
        .map((transaction: DataListProps) =>
          new Date(transaction.date).getTime()
        )
    );

    console.log(transactions);

    const total = entriesTotal - expensesTotal;

    setHighLightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      expenses: {
        amount: expensesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
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
              amount={highLightData.entries.amount}
              lastTransaction="Última entrada dia 13"
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highLightData.expenses.amount}
              lastTransaction="Última entrada dia 11"
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highLightData.total.amount}
              lastTransaction="Última entrada dia 11"
            />
          </HighLightCardContainer>

          <Transactions>
            <TitleList>Listagem</TitleList>

            <TransactionList
              data={transactions}
              key={(item) => item.id}
              renderItem={({ item }) => (
                <TransactionCard data={item}></TransactionCard>
              )}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
};
