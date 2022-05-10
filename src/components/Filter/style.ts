import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        backgroundColor: theme.colors.input,
        borderRadius: 20,
    },
    search: {
        width: '70%',
        justifyContent: 'center',
        padding: 8,
        flexDirection: 'row',
    },
});
