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
    },
    card:{
        backgroundColor: "#fffafa",
        alignItems: "center",
        margin: 5,
        marginLeft: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        padding: 1,
        elevation: 7,
    },
    cardTitle:{
        fontSize: 12,
        fontWeight: "700"
    },
    cardFilme:{
        width: poster,
        height: alturaPoster,
        borderRadius: 10
    },
    cardGenero:{
        fontSize: 12,
        borderBottomWidth: 0.5,
        color: "#e4bb23",
        borderBottomColor:"#e4bb23",
    },
    cardNota:{
        flexDirection: "row",
        alignItems: "center"
    },
    nota:{
        fontWeight: "700",
        marginLeft: 60,
    }
})

export default style;