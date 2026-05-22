//app
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tela1 from './components/Tela1';
import Tela2 from './components/Tela2';
import Tela3 from './components/Tela3';
import Tela4 from './components/Tela4';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
     <Stack.Navigation>
        <Stack.Screen name="Tela Inicial"  component = { Tela1 } />
        <Stack.Screen name="Tela 2"        component = { Tela2 } />
        <Stack.Screen name="Tela 3"        component = { Tela3 } />
        <Stack.Screen name="Tela 4"        component = { Tela4 } />
      </Stack.Navigation>
    </NavigationContainer>
    
  )
}