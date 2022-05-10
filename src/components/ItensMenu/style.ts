import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
        justifyContent: "center"
    },
    buttons: {
        width:'50%',
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 50,
        marginBottom: 20
    },
    text: {
        color: theme.colors.white,
        marginLeft: 5
    }
});
