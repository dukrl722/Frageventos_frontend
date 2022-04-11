import React from 'react';
import {Image, Text, View} from 'react-native';

import Logo from '../../assets/splash.png';

import { styles } from './style';
import {LinearGradient} from "expo-linear-gradient";
import {theme} from "../../global/styles/theme";

export function Header() {

    const {headerPrimary, headerSecondary} = theme.colors;

    return (
        <LinearGradient colors={[headerPrimary, headerSecondary]} style={styles.container}>
            <Image source={Logo} style={styles.imageContainer} />
        </LinearGradient>
    )
}
