//tela1
import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';


export default function Tela1 (props) {
  return (
   <View style={styles.container}>
    <Text>Star wars ordem cronológica</Text>      
    <Image source={logo} style={styles.imagem}/>     
    <Text style={styles.titulo}>        
    Você sabe qual é a ordem cronológica da franquia Star Wars      
   </Text>      <Text style={styles.textos}>        
   Os principais filmes da franquia estão divididos em e triologia      
   </Text>
      <Button
     title='Ver 1 trilogia'
     onPress={() => props.navigation.navigate("Tela2")} color="#a35a16ff"
     />
       <Button
     title='Ver 2 trilogia'
     onPress={() => props.navigation.navigate("Tela3")} color="#a35a16ff"
     />
      <Button
     title='Ver 3 trilogia'
     onPress={() => props.navigation.navigate("Tela4")} color="#a35a16ff"
     />
   </View>
  )
}


// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.containerHome}>
//       <Text style={styles.tituloHome}>Tela Inicial</Text>
//       <Text style={styles.subtitulo}>Bem-vindo ao sistema</Text>
//       <View style={styles.espacoBotao}>
//         <Button
//           title="Ir para Detalhes"
//           color="#6200EE"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.containerDetails}>
//       <Text style={styles.tituloDetails}>Página de Detalhes</Text>
//       <Text style={styles.textoComum}>Aqui você encontra mais informações.</Text>
//       <View style={styles.espacoBotao}>
//         <Button
//           title="Voltar"
//           color="#03DAC6"
//           onPress={() => navigation.goBack()}
//         />
//       </View>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tituloHome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  containerDetails: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tituloDetails: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  textoComum: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 30,
  },
  espacoBotao: {
    width: '80%',
  },
});
