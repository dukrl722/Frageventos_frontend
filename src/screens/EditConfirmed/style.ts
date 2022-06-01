import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.FundoEdit,
    },
    cat: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    balao: {
        width: '100%',
        height: '50%',
        position: "absolute",
        marginTop: 50
    },
    text: {
        color: theme.colors.white,
        fontFamily:theme.fonts.title700,
        fontSize:25,
    },
    containerInfos: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 50
    },
    textButton:{
        color: theme.colors.white,
        fontFamily:theme.fonts.title700,
        fontSize:20,
    },
    button:{
        backgroundColor:theme.colors.black,
        alignItems:'center',
        justifyContent:'center',
        marginTop:100,
        borderRadius:30,
        width:'60%',
        height:60,
        elevation:10
    }
});
