import React, { useState, useEffect } from "react";
import { Dimensions, FlatList } from "react-native";
import {
  CardView,
  Container,
  ScrollAddress,
  TextAddress,
  TextView,
} from "./styles";

import supabase from "../../service/client";

const Adresses = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    supabase
      .get("/enderecos")
      .then((response) => {
        setAddresses(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      <FlatList
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        data={addresses}
        renderItem={({ item }) => (
          <CardView>
            <TextView>
              <TextAddress>Nome: {item.name}</TextAddress>
            </TextView>
            <TextView>
              <TextAddress>Telefone: {item.phone}</TextAddress>
            </TextView>
            <TextView>
              <TextAddress>CEP: {item.cep}</TextAddress>
            </TextView>
            <TextView>
              <TextAddress>Logradouro: {item.logradouro}</TextAddress>
            </TextView>
            <TextView>
              <TextAddress>
                Número: {item.number} {item.complement}
              </TextAddress>
            </TextView>
            <TextView>
              <TextAddress>
                {item.city} - {item.state}
              </TextAddress>
            </TextView>
          </CardView>
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default Adresses;
