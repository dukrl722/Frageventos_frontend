import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        width: 250,
        height: 45,
        borderRadius: 50,
        top: 360,
        backgroundColor: theme.colors.buttonLogin,
        opacity: 0.7
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 15,
        color: theme.colors.textInput,
        fontFamily: theme.fonts.text500
    }
});
