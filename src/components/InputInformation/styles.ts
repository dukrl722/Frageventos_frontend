import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContent: {
        marginHorizontal: 50,
        height: 60,
        flexDirection: 'row',
        marginVertical: 30
    },
    viewContentMini:{
        marginHorizontal: 50,
        width:'20%',
        height: 60,
        flexDirection: 'row',
        marginVertical: 30
    },
    smallText: {
        fontSize: 10,
        top:3,
        left:3
    },
    inputImage: {
        bottom: 5,
        left:70,
        position: 'absolute'
    },
    input: {
        bottom: 5,
        left:10,
        position: 'absolute'
    },
    smallImage: {
        width: 70,
        height: 40,
        position: 'absolute',
        bottom:0,
    },
    bottomLine: {
        fontWeight: "bold",
        fontSize: 16,
        top: 45,
        justifyContent: 'flex-start',
        position: 'absolute'
    },
})