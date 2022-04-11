import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        padding: 20,
        justifyContent: 'space-around'
    },
    viewContent: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50
    },
    image: {
        width: 190,
        height: 140
    },
    forgot: {
        textAlign: 'center',
        color: theme.colors.textInput,
        fontFamily: theme.fonts.text500
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContent: {
        alignItems: 'center',
        marginVertical: 50
    },
    textTitle: {
        fontSize: 20,
        marginBottom: 10,
        color: theme.colors.textInput,
        fontFamily: theme.fonts.title700
    },
    forgotView: {
        marginTop: 50
    }
});
