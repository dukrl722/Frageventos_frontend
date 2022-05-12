import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',  
    },
    input: {
        height: 60,
        width: '100%',
        backgroundColor: theme.colors.inputsBackground,
        justifyContent: 'center',
        borderColor: theme.colors.border,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 15,
        shadowColor: "#000",
        elevation: 5,
    },
    labels: {
        paddingLeft: 10,
        color: theme.colors.textInput,
    },
    eyes: {
        position: 'absolute',
        right: 10
    },
    textPlace: {
        color:theme.colors.white,
        position: 'absolute',
        top: 5,
        left: 10,
        fontSize: 10,
        fontFamily: theme.fonts.text400,
        opacity:0.5
    },
    textInput:{
        fontFamily:theme.fonts.text500,
        fontSize:18,
        color:theme.colors.white,
    }
});