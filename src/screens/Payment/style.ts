import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
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
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginTop: 5,
        borderWidth:1,
        borderColor:theme.colors.Background,
        elevation: 2,
        backgroundColor: theme.colors.inputRegister,
    },
    container_5: {
        width: "90%",
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginTop: 5,
        borderWidth:1,
        borderColor:theme.colors.Background,
        elevation: 2,
        backgroundColor: '#e1e1e1',
     
    },
    tinyLogo: {
        width: 45,
        height: 45,
        resizeMode: "cover",
        marginLeft:10
    },
    check: {
        width: 20,
        height: 20,
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.TermsEnabled,
        borderWidth: 2,
        borderRadius: 3,
        marginRight: 10,
    },
    checked: {
        width: 20,
        height: 20,
        backgroundColor: theme.colors.green,
        borderColor: theme.colors.textInput,
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
    textEdit: {
        fontSize: 20,
    },
    title: {
        fontSize: 25,
        fontFamily:theme.fonts.title700
    },
});
