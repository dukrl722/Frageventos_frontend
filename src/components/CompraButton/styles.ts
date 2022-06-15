import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 250,
        height: 45,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: theme.colors.green,
        opacity: 0.7
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 15,
        color: theme.colors.textInput,
        fontFamily: theme.fonts.text500
    }
});
