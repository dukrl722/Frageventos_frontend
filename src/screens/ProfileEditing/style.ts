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
    inputs: {
        height: 220,
        width: '80%',
        marginTop: 20
    },
    profileInfos: {
        flex: 1,
        alignItems: 'center'
    },
    imageProfile: {
        width: 200,
        height: 200,
    },
    imgProfileContainer: {
        width: 220,
        height: 220,
        backgroundColor: theme.colors.white,
        borderRadius: 120,
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '40%',
        height: '8%',
        backgroundColor: 'green',
        marginTop: 40
    },
    textButton: {
        color: theme.colors.white,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
    },
    title: {
        flexDirection: 'row',
        width: '80%'
    }
});
