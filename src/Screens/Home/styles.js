import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #5AADBF;
`;

export const TouchableButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #F27D16;
  border-radius: 5px;
  width: 250px;
  padding: 15px;
`;

export const ButtonView = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;
