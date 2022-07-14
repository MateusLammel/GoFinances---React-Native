import React from "react";
import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  SignInTitle,
  Title,
  TitleWrapper,
} from "./styles";
import AppleSvg from "../../assets/apple.svg";
import LogoSvg from "../../assets/logo.svg";
import GoogleSvg from "../../assets/google.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInButton } from "../../components/SignInButton";

export const SignIn = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(70)} />
          <Title>
            Controle suas {`\n`}
            finanças de forma {`\n`}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {`\n`}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInButton title="Entrar com Google" svg={GoogleSvg} />
          <SignInButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};
