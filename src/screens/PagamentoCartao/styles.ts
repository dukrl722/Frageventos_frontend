import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({

    screen: {
        alignItems: 'center',
    },
    container:{
        flex: 1,
        backgroundColor:theme.colors.white
    },
    viewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContent: {
        fontSize: 16,
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 60,
    },
    infos:{
        width:'100%',
        height:'80%'
    }
})