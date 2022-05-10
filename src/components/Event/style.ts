import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        height: 600,
        marginBottom: 15
    },
    textContainer: {
        fontFamily: theme.fonts.text600,
        position: "absolute",
        bottom: 10,
        left: 15,
        color: 'white'
    },
    imageContainer: {
        marginBottom: 15,
        borderRadius: 8,
        height: 200,
        justifyContent: "center",
    },
    date: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'absolute',
        right: 5,
        top: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateDay: {
        fontFamily: theme.fonts.title700,
        fontSize:22
    },
    dateMonth: {
        fontFamily: theme.fonts.text400,
        fontSize:12
    }
});
