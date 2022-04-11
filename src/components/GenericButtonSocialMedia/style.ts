import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.input,
        opacity: 0.7,
        borderRadius: 50,
        marginBottom: 15
    },
    image: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    textContainer: {
        marginLeft: 40,
        color: theme.colors.textInput,
        fontFamily: theme.fonts.text500
    }
});
