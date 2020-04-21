import React, { Component } from "react";
import { ScrollView, SafeAreaView} from "react-native";

import Cabecalho from "./src/filmes/components/Header/Header";
import Listagem from "./src/filmes/components/Listagem/Listagem";




export default class App extends Component {
  
  render() {
    return (
      <SafeAreaView>
      <ScrollView style={{backgroundColor: "#f2f2f2"}}>
        <Cabecalho />
        <Listagem  />
      </ScrollView>
      </SafeAreaView>
    );
  }
};
