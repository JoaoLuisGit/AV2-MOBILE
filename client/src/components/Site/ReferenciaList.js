import React from 'react';
import { FlatList } from 'react-native';
import ReferenciaItem from './ReferenciaItem';

const ReferenciasList = ({ referencia, copiarReferencia, deletarReferencia }) => {
  const renderizarItem = ({ item, index }) => (
    <ReferenciaItem
      item={item}
      index={index}
      copiarReferencia={copiarReferencia}
      deletarReferencia={deletarReferencia}
    />
  );

  return (
    <FlatList
      data={referencia}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderizarItem}
    />
  );
};

export default ReferenciasList;