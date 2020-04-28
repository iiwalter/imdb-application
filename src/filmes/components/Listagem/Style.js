import {StyleSheet, Dimensions} from 'react-native'

const largura = Dimensions.get("screen").width;
const poster = largura / 3
const alturaPoster = Dimensions.get("screen").height / 4; 
const style = new StyleSheet.create({
    generoMenu:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 5,
    },
    genero:{
        padding: 3,
        borderRadius: 3,
        borderBottomWidth: 0.5,
        borderBottomColor:"#e4bb23"
    },
    textGenero:{
        color: "#e4bb23",
    },
    generoLista:{
        justifyContent: "center",
        margin: 5,
        alignItems: "center",
    }
})

export default style;
