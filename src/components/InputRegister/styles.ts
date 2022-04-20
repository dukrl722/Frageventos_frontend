import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 45,
        width: '80%',
        backgroundColor: theme.colors.inputsBackground,
        justifyContent: 'center',
        borderColor: theme.colors.border,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2.62,
        elevation: 4,
    },
    labels: {
        paddingLeft: 10,
        color: theme.colors.fontInputs
    },
    eyes: {
        position: 'absolute',
        right: 10
    }
});