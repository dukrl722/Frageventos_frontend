import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    container_1: {
        justifyContent: "space-around",
        flex: 1,
    },
    container_2: {
        alignItems: "center",
    },
    container_3: {
        alignItems: "center",
    },
    container_4: {
        width: "90%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginTop: 5,
        elevation: 1,
        backgroundColor: theme.colors.background,
    },
    tinyLogo: {
        width: 60,
        height: 60,
        resizeMode: "cover",
    },
    check: {
        width: 20,
        height: 20,
        backgroundColor: theme.colors.TermsDisabled,
        borderColor: theme.colors.TermsEnabled,
        borderWidth: 2,
        borderRadius: 3,
        marginRight: 10,
    },
    checked: {
        width: 20,
        height: 20,
        backgroundColor: theme.colors.TermsEnabled,
        borderColor: theme.colors.TermsDisabled,
        borderWidth: 2,
        borderRadius: 3,
        marginRight: 10,
    },
    buttonPag: {
        width: "85%",
        height: 50,
        backgroundColor: theme.colors.green,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 100,
        elevation: 10,
    },
    textButton: {
        flex: 1,
        color: "white",
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: "center",
    },
});
