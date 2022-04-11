import React, {ReactNode} from 'react';
import {Image, ImageBackground, View} from 'react-native';

import { styles } from "./style";
import {LinearGradient} from "expo-linear-gradient";
import {theme} from "../../global/styles/theme";

type Props = {
    children: ReactNode
}

export function Background({children} : Props) {

    const {primary, secondary} = theme.colors;

    return (
        <LinearGradient colors={[primary, secondary]} style={styles.container}>
            {children}
        </LinearGradient>
    )
}
