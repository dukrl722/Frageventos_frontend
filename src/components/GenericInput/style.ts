import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: theme.colors.input,
        opacity: 0.7,
        borderRadius: 50,
        marginBottom: 15
    },
    image: {
        width: 17,
        height: 25,
        marginHorizontal: 10
    },
    input: {
        marginHorizontal: 10,
        fontFamily: theme.fonts.text500,
        width: '100%'
    }
});
