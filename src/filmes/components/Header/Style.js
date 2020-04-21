import {StyleSheet, Dimensions} from 'react-native'
const largura = Dimensions.get("screen").width;
const style = new StyleSheet.create({
    body:{
       backgroundColor: "#f2f2f2"
    },
    header:{
        flexDirection: "row",
        margin: 5,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: 'transparent'
    },
    user:{
        flexDirection: "row",
        margin: 5,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    avatar:{
        borderRadius: 30,
        width: 50,
        height: 50,
        marginRight: 5
    },
    banner:{
        width: largura,
        height: largura
    },
})
export default style