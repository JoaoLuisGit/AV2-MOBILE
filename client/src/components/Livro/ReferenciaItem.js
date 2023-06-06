import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const ReferenciaItem = ({ item, index, copiarReferencia, deletarReferencia }) => {
  return (
    <View style={styles.view1}>
      <Text style={styles.texto1}>{item}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <TouchableOpacity activeOpacity={1} nextFocusUp={1}>
          <Button title="Copiar referência" onPress={() => copiarReferencia(item)} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} nextFocusUp={1}>
          <Button title="Excluir referência" onPress={() => deletarReferencia(index)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  view1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginTop: 35,
  },
  texto1: {
    fontSize: 16,
    marginBottom: 10,
  },
};

export default ReferenciaItem;