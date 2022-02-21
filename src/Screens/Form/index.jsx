import React, { useState } from "react";
import { Alert, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import supabase from "../../service/client";

import {
  Container,
  InputForm,
  FormView,
  ScrollForm,
  KeyBoard,
  TouchableButton,
  TextButton,
  ButtonView,
  TextError,
  ErrorView,
  FlexView,
} from "./styles";
import { maskCep, maskTelefone } from "../../utils/masks";

//Estado com objeto contendo dados dos endereços
const Form = () => {
  const nav = useNavigation();

  const [address, setAddress] = useState({
    nome: "",
    telefone: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  //Estado com objeto contendo as validações e campos obrigatórios
  const [isValid, setIsValid] = useState({
    telefone: false,
    cep: false,
    logradouro: false,
    nome: false,
    numero: false,
    cidade: false,
    estado: false,
  });

  //Funções de validações
  //Telefone
  const handleValidTelefone = (val) => {
    val.length != 14
      ? setIsValid({
          ...isValid,
          telefone: false,
        })
      : setIsValid({
          ...isValid,
          telefone: true,
        });
  };
  //Cep
  const handleValidCep = (val) => {
    val = val.replace(/\D/g, "");
    val.length != 8
      ? setIsValid({
          ...isValid,
          cep: false,
        })
      : setIsValid({
          ...isValid,
          cep: true,
        });
  };
  //Logradouro
  const handleValidLogradouro = (val) => {
    val.length < 10 || val.length > 100
      ? setIsValid({
          ...isValid,
          logradouro: false,
        })
      : setIsValid({
          ...isValid,
          logradouro: true,
        });
  };

  const handleValidateButton = () => {
    isValid.nome &&
    isValid.telefone &&
    isValid.cep &&
    isValid.logradouro &&
    isValid.numero &&
    isValid.cidade &&
    isValid.estado
      ? handleSaveAddress()
      : Alert.alert("Erro!", "Campos obrigatórios não preenchidos");
  };

  //Função para colocar no banco de dados
  const handleSaveAddress = () => {
    Alert.alert(
      "Endereço salvo com sucesso",
      `
        Nome: ${address.nome}
        Telefone: ${address.telefone}
        Cep: ${address.cep}
        Logradouro: ${address.logradouro}
        Número: ${address.numero} ${
        address.complemento !== "" ? address.complemento : ""
      }
        Cidade: ${address.cidade} - ${address.estado}
      `,
      [
        {
          text: "OK",
          onPress: () => {
            nav.navigate("Addresses");
            handleStatesPage();
          },
        },
      ]
    );

    const data = {
      name: address.nome,
      phone: address.telefone,
      cep: address.cep,
      logradouro: address.logradouro,
      number: address.numero,
      complement: address.complemento,
      city: address.cidade,
      state: address.estado,
    };

    supabase.post("/enderecos", data);
  };

  //Reinicia a página
  const handleStatesPage = () => {
    setAddress({
      nome: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      cidade: "",
      estado: "",
    });
    setIsValid({
      telefone: false,
      cep: false,
      logradouro: false,
      nome: false,
      numero: false,
      cidade: false,
      estado: false,
    });
  };

  //Espaço para renderização
  return (
    <KeyBoard
      style={{ height: Dimensions.get("window").height }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <ScrollForm>
        <Container style={{ width: Dimensions.get("window").width }}>
          <InputForm
            style={{ width: "85%" }}
            value={address?.nome}
            placeholder="Nome:"
            onChangeText={(text) => {
              setAddress({
                ...address,
                nome: text,
              });
              text !== ""
                ? setIsValid({
                    ...isValid,
                    nome: true,
                  })
                : setIsValid({
                    ...isValid,
                    nome: false,
                  });
            }}
          />
          {/* Campo obrigatório */}
          {isValid.nome ? null : (
            <ErrorView style={{ width: "85%" }}>
              <TextError>Campo obrigatório!</TextError>
            </ErrorView>
          )}

          <InputForm
            style={{ width: "85%" }}
            value={address?.telefone}
            placeholder="Telefone: (99)99999999"
            onChangeText={(text) => {
              setAddress({
                ...address,
                telefone: maskTelefone(text),
              });
              handleValidTelefone(text);
            }}
          />
          {/* Se houver erro, mostra mensagem */}
          {isValid.telefone ? null : (
            <ErrorView style={{ width: "85%" }}>
              <TextError>Deve digitar 11 números!</TextError>
            </ErrorView>
          )}

          <InputForm
            style={{ width: "85%" }}
            value={address?.cep}
            placeholder="CEP: 99999999"
            onChangeText={(text) => {
              setAddress({
                ...address,
                cep: maskCep(text),
              });
              handleValidCep(text);
            }}
          />
          {/* Se houver erro, mostra mensagem */}
          {isValid.cep ? null : (
            <ErrorView style={{ width: "85%" }}>
              <TextError>Deve digitar 8 números!</TextError>
            </ErrorView>
          )}

          <InputForm
            style={{ width: "85%" }}
            value={address?.logradouro}
            placeholder="Logradouro"
            onChangeText={(text) => {
              setAddress({
                ...address,
                logradouro: text,
              });
              handleValidLogradouro(text);
            }}
          />
          {/* Se houver erro, mostra mensagem */}
          {isValid.logradouro ? null : (
            <ErrorView style={{ width: "85%" }}>
              <TextError>Deve conter entre 10 e 100 caracteres!</TextError>
            </ErrorView>
          )}

          <FormView>
            <FlexView>
              <InputForm
                style={{ width: "100%" }}
                textAlign="center"
                value={address?.numero}
                placeholder="Número"
                onChangeText={(text) => {
                  setAddress({
                    ...address,
                    numero: text,
                  });
                  text !== ""
                    ? setIsValid({
                        ...isValid,
                        numero: true,
                      })
                    : setIsValid({
                        ...isValid,
                        numero: false,
                      });
                }}
              />
              {/* Campo obrigatório */}
              {isValid.numero ? null : (
                <ErrorView style={{ width: "100%" }}>
                  <TextError>Campo obrigatório!</TextError>
                </ErrorView>
              )}
            </FlexView>

            <FlexView>
              <InputForm
                style={{ width: "100%" }}
                textAlign="center"
                value={address?.complemento}
                placeholder="Complemento"
                onChangeText={(text) => {
                  setAddress({
                    ...address,
                    complemento: text,
                  });
                }}
              />
            </FlexView>
          </FormView>

          <FormView>
            <FlexView>
              <InputForm
                style={{ width: "100%" }}
                textAlign="center"
                value={address?.cidade}
                placeholder="Cidade"
                onChangeText={(text) => {
                  setAddress({
                    ...address,
                    cidade: text,
                  });
                  text !== ""
                    ? setIsValid({
                        ...isValid,
                        cidade: true,
                      })
                    : setIsValid({
                        ...isValid,
                        cidade: false,
                      });
                }}
              />
              {/* Campo obrigatório */}
              {isValid.cidade ? null : (
                <ErrorView style={{ width: "100%" }}>
                  <TextError>Campo obrigatório!</TextError>
                </ErrorView>
              )}
            </FlexView>

            <FlexView>
              <InputForm
                style={{ width: "100%" }}
                textAlign="center"
                value={address?.estado}
                placeholder="Estado"
                onChangeText={(text) => {
                  setAddress({
                    ...address,
                    estado: text,
                  });
                  text !== ""
                    ? setIsValid({
                        ...isValid,
                        estado: true,
                      })
                    : setIsValid({
                        ...isValid,
                        estado: false,
                      });
                }}
              />
              {/* Campo obrigatório */}
              {isValid.estado ? null : (
                <ErrorView style={{ width: "100%" }}>
                  <TextError>Campo obrigatório!</TextError>
                </ErrorView>
              )}
            </FlexView>
          </FormView>

          <ButtonView>
            <TouchableButton
              onPress={() => {
                handleValidateButton();
              }}
            >
              <TextButton>Cadastrar</TextButton>
            </TouchableButton>
          </ButtonView>
        </Container>
      </ScrollForm>
    </KeyBoard>
  );
};

export default Form;
