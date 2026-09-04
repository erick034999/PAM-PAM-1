import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#1e1b2e',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    rodada: {
        fontSize: 16,
        color: '#c9c3e6',
        marginBottom: 16,
    },
    input: {
        borderWidth: 2,
        borderColor: '#7c5cff',
        borderRadius: 12,
        width: 100,
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        marginBottom: 16,
    },
    botao: {
        backgroundColor: '#7c5cff',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        marginBottom: 20,
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sorteado: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 4,
    },
    pontos: {
        fontSize: 18,
        color: '#ffd166',
        fontWeight: 'bold',
    },
    fim: {
        fontSize: 20,
        color: '#ffd166',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    botaoReiniciar: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#7c5cff',
    },
    botaoReiniciarTexto: {
        color: '#7c5cff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});