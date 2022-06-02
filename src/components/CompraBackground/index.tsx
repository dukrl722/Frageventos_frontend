import React, {ReactNode} from 'react';
// import {View} from 'react-native';

import { styles } from "./styles";
import {LinearGradient} from "expo-linear-gradient";
import {theme} from "../../global/styles/theme";

type Props = {
    children: ReactNode
}

export function CompraBackground({children} : Props) {
    const {white} = theme.colors

    return (
        <LinearGradient colors={[white, white]} style={styles.container}>
            {children}
        </LinearGradient>
    )
}