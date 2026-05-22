//tela 2
import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

import imagem from '../../assets/king.jpg';

export default function Tela2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>
          A história de Luke Skywalker
        </Text>

        <Image source={imagem} style={styles.imagem} />

        <Text style={styles.textos}>
          Trilogia original. Episódios IV, V e VI
        </Text>
      </View>
    </View>
  );
}