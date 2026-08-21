import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';

export default function ListaPersona() {
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemLista persona="Arthur Morgan" dataInicio="21/01" dataFim="19/02" desc="O melhor personagem de Red Dead Redemption 2" />
        <ItemLista persona="Kratos" dataInicio="20/02" dataFim="20/03" desc="O deus da guerra do universo de God of War" />
        <ItemLista persona="Gojo" dataInicio="21/03" dataFim="20/04" desc="O melhor personagem de Jujutsu Kaisen" />
        <ItemLista persona="Janio" dataInicio="21/04" dataFim="21/05" desc="O melhor personagem da Etec" />
        <ItemLista persona="Wyttor" dataInicio=" 22/05" dataFim="20/06" desc="Cara do corolla" />
        <ItemLista persona="Gordo" dataInicio="21/06" dataFim="23/07" desc="Personagem fictício criado no programa kilos mortais" />
        <ItemLista persona="Dolar" dataInicio="24/07" dataFim="23/08" desc="Inimigo da libra" />
        <ItemLista persona="Virgem" dataInicio="24/08" dataFim="23/09" desc="Signo" />
        <ItemLista persona="Sukuna" dataInicio="24/09" dataFim="23/10" desc="O maior vilão" />
        <ItemLista persona="Nicoly" dataInicio="24/10" dataFim="22/11" desc="O melhor personagem de Goiânia" />
        <ItemLista persona="Janitario" dataInicio="23/11" dataFim="21/12" desc="Evolução de Janio" />
        <ItemLista persona="Mudae" dataInicio="22/12" dataFim="20/01" desc="Bot" />
      </ScrollView>
    </View>
  )
}