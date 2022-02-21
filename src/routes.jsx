import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";   

import Home from './Screens/Home';
import Form from './Screens/Form';
import Adresses from './Screens/Adresses';

const Routes = () => {
    const Stack = createStackNavigator();

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: "#FFF",
          card: "#333259",
          text: "#FFF",
        },
      };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
         <Stack.Screen
          name="Form"
          component={Form}
          options={{
            title: "Formulário de cadastro"
          }}
        />
        <Stack.Screen
          name="Addresses"
          component={Adresses}
          options={{
            title: "Endereços cadastrados"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;