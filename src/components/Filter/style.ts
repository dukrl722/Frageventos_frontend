import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: theme.colors.input,
        marginVertical: 20
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 16,
        color: theme.colors.textInput,
        fontFamily: theme.fonts.text500,
        marginRight: 80
    },
    imageContainer: {
        width: 30,
        height: 30,
    }
});
