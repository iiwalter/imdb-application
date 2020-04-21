import { StyleSheet, Dimensions } from 'react-native'

const largura = Dimensions.get("screen").width;
const poster = largura / 3
const alturaPoster = Dimensions.get("screen").height / 4;

const modalLarg = largura
const modalHei = Dimensions.get("screen").height / 1.4
const style = new StyleSheet.create({
    card: {
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
    cardTitle: {
        fontSize: 12,
        fontWeight: "700"
    },
    cardFilme: {
        width: poster,
        height: alturaPoster,
        borderRadius: 10
    },
    cardGenero: {
        fontSize: 12,
        borderBottomWidth: 0.5,
        color: "#e4bb23",
        borderBottomColor: "#e4bb23",
    },
    cardNota: {
        flexDirection: "row",
        alignItems: "center"
    },
    nota: {
        fontWeight: "700",
        marginLeft: 60,
    },
    modalContent: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        padding: 1,
        elevation: 3,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 2,
        position: 'absolute',
        width: '100%'
    },
    titleFilme: {
        fontWeight: "500",
        fontSize: 20,
    },
    sinopse: {
        fontSize: 13,
        margin: 8,
        marginLeft: 20
    },
    trailer:{
        fontSize: 15,
        fontWeight: "500",
        margin: 10
    }
})
export default style;