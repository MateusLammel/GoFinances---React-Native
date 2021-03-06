import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { StatusBar } from "react-native";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { Routes } from "./src/routes";
export default function App() {
  const { loading } = useAuth();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded || loading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
