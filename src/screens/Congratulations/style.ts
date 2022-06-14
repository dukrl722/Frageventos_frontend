import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.Background,
    },
    lott: {
        width: "100%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    text: {
        color: theme.colors.black,
        fontFamily: theme.fonts.title700,
        fontSize: 15,
    },
    containerInfos: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    buttonPag: {
        width: "85%",
        height: 50,
        backgroundColor: theme.colors.green,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        elevation: 10,
    },
    textButton: {
        flex: 1,
        color: "white",
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: "center",
    },
    container4: {
        paddingTop: 60,
    },
});
