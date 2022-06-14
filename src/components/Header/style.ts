import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 80,
        height: 50,
        marginTop: getStatusBarHeight() + 10,
    },
    arrow: {
        width: '100%',
        alignItems: "flex-start",
        left: 30,
        top: getStatusBarHeight() + 35,
        position: 'absolute',
        color: theme.colors.ArrowIcon
    },
    bell:{
        width: 25,
        alignItems: "flex-end",
        right: 30,
        top: getStatusBarHeight() + 35,
        position: 'absolute',
        color: theme.colors.ArrowIcon,
    }
});
