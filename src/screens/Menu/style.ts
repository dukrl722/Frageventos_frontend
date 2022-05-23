import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    arrow: {
        width: '100%',
        alignItems: "flex-start",
        left: 30,
        top: getStatusBarHeight() + 35,
        color: theme.colors.ArrowIcon
    },
    header: {
        width: '100%',
        height: '20%'
    },
    minimaze: {
        right: 0,
        top: 0,
        width: '20%',
        height: '100%',
        position: 'absolute',
    },
});
