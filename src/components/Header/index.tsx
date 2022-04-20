import React from 'react';
import { Image, Text, View } from 'react-native';

import Logo from '../../assets/splash.png';

import { styles } from './style';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons';

type Props = {
    object?: string;
}

export function Header({ object, ...rest }: Props) {

    const { headerPrimary, headerSecondary } = theme.colors;
    function handleReturn() {

    }
    return (

        <LinearGradient colors={[headerPrimary, headerSecondary]} style={styles.container}>
            <Feather
                name={object ? object : ""}
                color={'black'}
                size={25}
                onPress={handleReturn}
                style={styles.arrow}
            />
            <Image source={Logo} style={styles.imageContainer} />
        </LinearGradient>
    )
}
