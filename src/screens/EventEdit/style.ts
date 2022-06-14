import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '80%',
        height: '65%',
        elevation: 5,
        borderRadius: 15
    },
    boxImage: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    Image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute"
    },
    boxInfo: {
        width: '100%',
        height: '50%',
        backgroundColor: theme.colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 10
    },
    button: {
        backgroundColor: theme.colors.TermsDisabled,
        width: '70%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 100
    },
    textButton: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
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
        fontSize: 22,
        color: theme.colors.black
    },
    dateMonth: {
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        color: theme.colors.black
    },
    info: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        marginLeft: 5
    },
    iconCamera: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    nameEvent: {
        position: "absolute",
        bottom: 10,
        left: 10
    },
    nameEventText: {
        color: theme.colors.white,
        fontFamily: theme.fonts.title700,
        fontSize: 15
    },
    infoText: {
        marginLeft: 5,
        fontFamily: theme.fonts.text500,
        fontSize: 12
    },
    nameLocal: {
        fontFamily: theme.fonts.title700
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
    confirm: {
        marginTop: 50,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmText: {
        color: theme.colors.white,
        fontFamily: theme.fonts.text600,
        fontSize: 15
    },
    edit: {
        position: 'absolute',
        top: 8,
        right: 8
    },
    camera: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: theme.colors.rgbTransparent
    }
});
