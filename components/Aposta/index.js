import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import estilo from './estilo';

const TOTAL_RODADAS = 5;

export default function Aposta() {
    const [numero, setNumero] = useState('');
    const [sorteado, setSorteado] = useState(null);
    const [rodada, setRodada] = useState(1);
    const [pontos, setPontos] = useState(0);
    const fim = rodada > TOTAL_RODADAS;

    function sortear() {
        if (fim || numero === '') return;
        const gerado = Math.floor(Math.random() * 100);
        const ganho = Math.max(0, 100 - Math.abs(Number(numero) - gerado));

        setSorteado(gerado);
        setPontos(p => p + ganho);
        setRodada(r => r + 1);
        setNumero('');
    }

    function reiniciar() {
        setNumero('');
        setSorteado(null);
        setRodada(1);
        setPontos(0);
    }

    return (
        <View style={estilo.container}>
            <Text style={estilo.title}>🎲 Jogo da Aposta</Text>

            {fim ? (
                <Text style={estilo.fim}>Fim de jogo! Pontuação final: {pontos}</Text>
            ) : (
                <>
                    <Text style={estilo.rodada}>Rodada {rodada} de {TOTAL_RODADAS}</Text>

                    <TextInput
                        style={estilo.input}
                        value={numero}
                        onChangeText={setNumero}
                        keyboardType="numeric"
                        placeholder="0-99"
                        maxLength={2}
                    />

                    <Pressable style={estilo.botao} onPress={sortear}>
                        <Text style={estilo.botaoTexto}>Sortear</Text>
                    </Pressable>

                    <Text style={estilo.sorteado}>Sorteado: {sorteado ?? '?'}</Text>
                    <Text style={estilo.pontos}>Pontos: {pontos}</Text>
                </>
            )}

            <Pressable style={estilo.botaoReiniciar} onPress={reiniciar}>
                <Text style={estilo.botaoReiniciarTexto}>Reiniciar</Text>
            </Pressable>
        </View>
    );
}