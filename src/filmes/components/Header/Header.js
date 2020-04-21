import React, { Fragment } from 'react'
import {Image, Text, View} from 'react-native'
import style from './Style'

const Cabecalho = ()=>{
    return (
    <Fragment>
        <View style={style.header}> 
            <Image 
                source={require("../../../img/logo-imdb.jpg")}
                 style={style.logotipo}
            />
            <View style={style.user}>
                <Image 
                    source={require("../../../img/walter-white.jpg")}
                    style={style.avatar}
                />
                <Text>Walter White</Text>
            </View>
      </View>
      <View style={style.banner}>
        <Image 
            source={require("../../../img/endgame.jpg")}
            style={style.banner}
            />
        </View>
    </Fragment>
    )
}
export default Cabecalho;
