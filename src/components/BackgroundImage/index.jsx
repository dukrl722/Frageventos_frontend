import React from 'react';
import { ImageBackground } from 'react-native';

import Background from '../../assets/background.png';

import { styles } from "./style";

export function BackgroundImage(children) {
    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.container}>

        </ImageBackground>
    )
}
