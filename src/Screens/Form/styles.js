import styled from "styled-components/native";
import { TextInput, KeyboardAvoidingView } from "react-native";

export const ScrollForm = styled.ScrollView`
  background-color: #5AADBF;
`;

export const KeyBoard = styled(KeyboardAvoidingView).attrs({})``;

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
`;

export const FormView = styled.View`
  width: 85%;
  justify-content: space-between;
  flex-direction: row;
`;

export const InputForm = styled(TextInput).attrs({
  height: 50,
  fontSize: 15,
  backgroundColor: "#FFF",
  borderBottomColor: "#FFAAFF",
  borderBottomWidth: 2,
  paddingLeft: 5,
})`
  margin-top: 30px;
`;

export const TouchableButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #F27D16;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
`;

export const ButtonView = styled.View`
  width: 85%;
  margin-top: 50px;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;

export const TextError = styled.Text`
  color: #F21F0C;
  font-size: 14px;
`;

export const ErrorView = styled.View`
`;

export const FlexView = styled.View`
  width: 40%;
`;
