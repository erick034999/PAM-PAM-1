import React from 'react';
import ListaPersona from './components/ListaPersona';
import ListaPersonaAuto from './components/ListaPersonaAuto';
import SeletorPersona from './components/SeletorPersona';

export default function App() {
  return (
    // Escolha qual componente você quer renderizar, ListaPersona ou ListaPersonaAuto
    // É só comentar o que não quer usar e descomentar o que quer usar
    // <ListaPersona/>
    // <ListaPersonaAuto />
     <SeletorPersona />
  );
}