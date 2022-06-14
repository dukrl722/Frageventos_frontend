import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    containerP: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    container1: {
        flexDirection: "row",
    },
    container2: {
        width: "85%",
    },
    container3: {
        width: "80%",
    },
    container4: {
        flexDirection: "row",
    },
    tinyLogo: {
        width: 45,
        height: 45,
        resizeMode: "cover",
    },
    textEdit: {
        fontSize: 25,
    },
    textEdit2: {
        fontSize: 20,
    },
    textEdit3: {
        fontSize: 15,
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
});
