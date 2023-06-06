import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Site } from './src/components/Site';
import { Livro } from './src/components/Livro';
import { TelaInicial } from './src/components/TelaInicial';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={TelaInicial} />
      <Stack.Screen name="Site" component={Site} />
      <Stack.Screen name="Livro" component={Livro} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
