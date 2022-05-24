import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        borderRadius: 20,
        height: 150,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    Title:{
        fontFamily:theme.fonts.title700,
        fontSize:18
    },
    SubTitle:{
        fontFamily:theme.fonts.text400,
        fontSize:15,
        marginTop:2
    },
    historic:{
        marginLeft:15,
        marginTop:15,
    }
});
