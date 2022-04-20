import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: '80%',
        backgroundColor: theme.colors.inputRegister,
        marginTop: 10,
        marginBottom: 30,
        color: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2.62,
        elevation: 4,
        borderColor: theme.colors.border,
        borderWidth: 1,
        justifyContent: 'center',
    },
    labels: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: theme.colors.textInput
    },

})