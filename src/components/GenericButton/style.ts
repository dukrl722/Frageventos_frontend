import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        width: 150,
        height: 50,
        borderRadius: 50,
        backgroundColor: theme.colors.buttonLogin,
        opacity: 0.7
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 20,
        color: theme.colors.textInput,
        fontFamily: theme.fonts.text500
    }
});
