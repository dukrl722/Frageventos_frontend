import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 80,
        height: 50,
        marginTop: getStatusBarHeight() + 10
    }
});
