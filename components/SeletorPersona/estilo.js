import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#204550',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#204550',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultadoBox: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  resultadoTexto: {
    fontSize: 18,
    color: '#204550',
    fontWeight: '600',
    textAlign: 'center',
  },
  erroTexto: {
    marginTop: 15,
    color: 'red',
    textAlign: 'center',
  },
    descricaoResultado: {
    marginTop: 10,
    fontSize: 16,
    color: '#204550',
    textAlign: 'center',
  },
});

export default estilo;