import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
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
        bottom: 0,
        width: "100%",
        height: '50%',
        position: 'absolute',
    },
});
