import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cabecalho: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 80,
        height: 50,
        marginTop: getStatusBarHeight() + 10,
    },
    arrow: {
        width: '100%',
        alignItems: "flex-start",
        left: 30,
        top: getStatusBarHeight() + 35,
        position: 'absolute',
        color: theme.colors.ArrowIcon
    },
    Title:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    SubTitle:{
        fontFamily:theme.fonts.title700,
        fontSize:18,
        marginLeft:8
    },
    viewContent: {
        paddingHorizontal: 20
    },
    flatList:{
        height:'79%',
    }
});
