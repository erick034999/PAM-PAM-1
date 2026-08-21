import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import estilo from './estilo.js';

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

function pegarPersona(mes, dia) {
  return personas.find(({ dataInicio, dataFim }) => {
    const [diaIni, mesIni] = dataInicio.trim().split('/').map(Number);
    const [diaFim, mesFim] = dataFim.trim().split('/').map(Number);

    if (mesIni <= mesFim) {
      return (
        (mes === mesIni && dia >= diaIni) ||
        (mes === mesFim && dia <= diaFim) ||
        (mes > mesIni && mes < mesFim)
      );
    }
    return (mes === mesIni && dia >= diaIni) || (mes === mesFim && dia <= diaFim);
  });
}

export default function SeletorPersona() {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [resultado, setResultado] = useState(null);

  function handleCalcular() {
    const diaNum = parseInt(dia, 10);
    const mesNum = parseInt(mes, 10);

    if (!diaNum || !mesNum || mesNum < 1 || mesNum > 12) {
      setResultado({ erro: true });
      return;
    }

    const encontrado = pegarPersona(mesNum, diaNum);
    setResultado(encontrado || { erro: true });
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.label}>Dia de nascimento</Text>
      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="Ex: 15"
        value={dia}
        onChangeText={setDia}
        maxLength={2}
      />

      <Text style={estilo.label}>Mês de nascimento</Text>
      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="Ex: 07"
        value={mes}
        onChangeText={setMes}
        maxLength={2}
      />

      <TouchableOpacity style={estilo.botao} onPress={handleCalcular}>
        <Text style={estilo.textoBotao}>Descobrir persona</Text>
      </TouchableOpacity>

      {resultado && !resultado.erro && (
        <View style={estilo.resultadoBox}>
          <Text style={estilo.resultadoTexto}>Você é o (a) {resultado.persona}!</Text>
          <Text style={estilo.descricaoResultado}>
            {resultado.desc}
          </Text>
        </View>
      )}

      {resultado && resultado.erro && (
        <Text style={estilo.erroTexto}>Data inválida, confira o dia e o mês.</Text>
      )}
    </View>
  );
}