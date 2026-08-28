import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxPersona}>
      <Text style={estilo.nomePersona}>
        {props.persona}
      </Text>
      
      <Text>
        Nascidos entre: {props.dataInicio} - {props.dataFim}
      </Text>
      <Text style={estilo.descricaoPersona}>
        {props.desc}
      </Text>
    </View>
  )
}