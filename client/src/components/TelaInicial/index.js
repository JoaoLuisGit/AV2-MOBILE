import { Button, View } from 'react-native';
import * as React from 'react';

export function TelaInicial({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20,}}>
        <Button
          title="Vá para Livro"
          onPress={() => navigation.navigate('Livro')}
        />
        <Button title="Vá para Site"
          onPress={() => navigation.navigate('Site')}/>
      </View>
    );
  }
  