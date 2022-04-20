import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12
    },
    check: {
        width: 14,
        height: 14,
        backgroundColor: theme.colors.TermsDisabled,
        borderColor: theme.colors.TermsEnabled,
        borderWidth: 2,
        borderRadius: 3,
        marginRight: 10
    },
    checked: {
        width: 14,
        height: 14,
        backgroundColor: theme.colors.TermsEnabled,
        borderColor: theme.colors.TermsDisabled,
        borderWidth: 2,
        borderRadius: 3,
        marginRight: 10
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    terms: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCheck: {
        width: '65%',
        height: 50,
        backgroundColor: theme.colors.checkBox,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonChecked: {
        width: '65%',
        height: 50,
        backgroundColor: theme.colors.TermsEnabled,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    titleButton: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
    },
    teste: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
