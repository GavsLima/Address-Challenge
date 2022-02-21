import React from "react";
import { ButtonView, Container, TextButton, TouchableButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const nav = useNavigation();

  const handlePage = (screen) => {
    nav.navigate(screen);
  };

  return (
    <Container>
      <ButtonView>
        <TouchableButton onPress={() => handlePage("Form")}>
          <TextButton>Cadastrar endereço</TextButton>
        </TouchableButton>
      </ButtonView>

      <ButtonView>
        <TouchableButton onPress={() => handlePage("Addresses")}>
          <TextButton>Endereços cadastrados</TextButton>
        </TouchableButton>
      </ButtonView>
    </Container>
  );
};

export default Home;
