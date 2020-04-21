import React, { Fragment, Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import style from './Style'

import Card from '../Card/Card'



export default class Listagem extends Component {
  state = {
    filmes: [
      {
        id: "1",
        title: "Wonder Woman 1984",
        src: require('../../../img/wonder-woman-1984.jpg'),
        genero: "Heróis",
        sinopse: "Sequência de Mulher-Maravilha (Gal Gadot) que será ambientada nos EUA. A sinopse oficial ainda não foi divulgada.",
        trailer: "https://www.youtube.com/watch?v=gWpSjdeRIYc&t=2s"
      },
      {
        id: "2",
        title: "Jurassic World",
        src: require('../../../img/poster-jurassic-world.jpg'),
        genero: "Aventura",
        sinopse: "O Parque dos Dinossauros está aberto para visitação, e o público tem a chance de ver de perto as mais diversas espécies. Porém, um desses animais, resultado de experiência genética, desenvolve alta inteligência e se torna uma ameaça para todos.",
        trailer: "https://www.youtube.com/watch?v=RFinNxS5KN4"
      },
      {
        id: "3",
        title: "Coringa",
        src: require('../../../img/poster-coringa.jpg'),
        genero: "Drama / Suspense",
        sinopse: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.",
        trailer: "https://www.youtube.com/watch?v=jfVTJm9NilA"
      },
      {
        id: "4",
        title: "MoonLight",
        src: require('../../../img/poster-moonlight.jpg'),
        genero: "Drama / Suspense",
        sinopse: "Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso.",
        trailer: "https://www.youtube.com/watch?v=9NJj12tJzqc"
      },
      {
        id: "5",
        title: "It Capítulo 2",
        src: require('../../../img/it-chapter-2.jpg'),
        genero: "Drama / Suspense",
        sinopse: "Vinte e sete anos depois dos eventos que chocaram os adolescentes que faziam parte do Clube dos Perdedores, os amigos realizam uma reunião. No entanto, o reencontro se torna uma verdadeira e sangrenta batalha quando Pennywise, o palhaço, retorna.",
        trailer: "https://www.youtube.com/watch?v=Zs0hLEHAoSs"
      },
      {
        id: "6",
        title: "Batman vs Superman",
        src: require('../../../img/poster-batman-superman.jpg'),
        genero: "Heróis",
        sinopse: "O confronto entre Superman e Zod em Metrópolis fez a população mundial se dividir sobre a presença de extraterrestres na Terra. Enquanto muitos consideram Superman um novo deus, há aqueles que entendem ser extremamente perigosa a existência de um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele enfrenta Superman enquanto o mundo se pergunta que tipo de herói precisa.",
        trailer: "https://www.youtube.com/watch?v=IHDgrNxO-5I"
      },
      {
        id: "7",
        title: "Capitã Marvel",
        src: require('../../../img/poster-capita-marvel.jpg'),
        genero: "Heróis",
        sinopse: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls.",
        trailer: "https://www.youtube.com/watch?v=av2jODMFu6M"
      },
      {
        id: "8",
        title: "Guerra Civil",
        src: require('../../../img/poster-civil-war.jpg'),
        genero: "Aventura",
        sinopse: "O ataque de Ultron faz com que os políticos decidam controlar os Vingadores, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
        trailer: "https://www.youtube.com/watch?v=FRLYZn5PGuA"
      },
      {
        id: "9",
        title: "Liga da Justiça",
        src: require('../../../img/poster-liga-justica.jpg'),
        genero: "Heróis",
        sinopse: "Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes, poderá ser tarde demais para salvar o planeta de um catastrófico ataque.",
        trailer: "https://www.youtube.com/watch?v=BZUm2lpPoKM"
      },
      {
        id: "10",
        title: "Pantera Negra",
        src: require('../../../img/poster-pantera-negra.jpg'),
        genero: "Aventura",
        sinopse: "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.",
        trailer: "https://www.youtube.com/watch?v=wL4a4MafSjQ"
      }
    ],
    numColumns: 2
  }

  allFilmes = this.state.filmes

  filtroFilme = buttonName => {
    const filme = this.state.filmes
    if (filme != this.allFilmes) {
      this.setState({
        filmes: this.allFilmes.filter(item => {
          return item.genero == buttonName;
        })
      })
      console.log(filme)
    } else {
      this.setState({
        filmes: filme.filter(item => {
          return item.genero == buttonName;
        })
      })
    }
  }

  render() {
    return (
      <Fragment>
        <View style={style.generoMenu}>
          <TouchableOpacity style={style.genero} activeOpacity={0.2} onPress={() => {
            this.filtroFilme("Heróis")

          }}>
            <Text style={style.textGenero}>Heróis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.genero} onPress={() => { this.filtroFilme("Drama / Suspense") }} >
            <Text style={style.textGenero}>Drama / Suspense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.genero} onPress={() => { this.filtroFilme("Aventura") }}>
            <Text style={style.textGenero}>Aventura</Text>
          </TouchableOpacity>
        </View>
        <View style={style.generoLista}>
          <FlatList
            style={{ flexDirection: "row" }}
            data={this.state.filmes}
            renderItem={({ item }) => <Card title={item.title} src={item.src} genero={item.genero} sinopse={item.sinopse} trailer={item.trailer}/>}
            keyExtractor={item => item.id}
            numColumns={this.state.numColumns}
          />
        </View>
      </Fragment>
    )
  }
}