import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    cabecalho: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50
    },
    viewContent: {
        justifyContent:'space-between',
        alignContent:'center',
        marginTop: 100,
        top:30,
    },
    textContent: {
        fontSize:16,
        fontWeight:"bold",
        left:47,
        bottom:43,
        
    },
    image: {
        width: 100,
        height: 60,
        right:45,
    }
})