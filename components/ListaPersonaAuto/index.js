import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo/index.js';
import ItemLista from '../ItemLista/index.js';
import estilo from './estilo.js';

export default function ListaPersonaAuto() {
  const personas = [
    {persona:'Arthur Morgan', dataInicio:'21/01', dataFim:'19/02', desc:"O melhor personagem de Red Dead Redemption 2" },
    {persona:'Kratos', dataInicio:'20/02', dataFim:'20/03', desc:"O deus da guerra do universo de God of War" },
    {persona:'Gojo', dataInicio:'21/03', dataFim:'20/04', desc:"O melhor personagem de Jujutsu Kaisen" },
    {persona:'Janio', dataInicio:'21/04', dataFim:'21/05', desc:"O melhor personagem da Etec" },
    {persona:'Wyttor', dataInicio:' 22/05', dataFim:'20/06', desc:"Cara do corolla" },
    {persona:'Gordo', dataInicio:'21/06', dataFim:'23/07', desc:"Personagem fictício criado no programa kilos mortais" },
    {persona:'Dolar', dataInicio:'24/07', dataFim:'23/08', desc:"Inimigo da libra" },
    {persona:'Virgem', dataInicio:'24/08', dataFim:'23/09', desc:"Signo" },
    {persona:'Sukuna', dataInicio:'24/09', dataFim:'23/10', desc:"O maior vilão" },
    {persona:'Nicoly', dataInicio:'24/10', dataFim:'22/11', desc:"O melhor personagem de Goiânia" },
    {persona:'Janitario', dataInicio:'23/11', dataFim:'21/12', desc:"Evolução de Janio" },
    {persona:'Mudae', dataInicio:'22/12', dataFim:'20/01', desc:"Bot" },
  ];
    return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        {personas.map((persona, index) => (
          <ItemLista
            key={index}
            persona={persona.persona}
            dataInicio={persona.dataInicio}
            dataFim={persona.dataFim}
            desc={persona.desc}
          />
        ))}
      </ScrollView>
    </View>
  )
}