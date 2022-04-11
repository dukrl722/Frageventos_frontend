import React from 'react';
import { Text, Image } from 'react-native';
import { RectButton } from "react-native-gesture-handler";

import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google.png';

import { styles } from './style';

type Props = {
    name: string;
    type: string;
}

export function GenericButtonSocialMedia({name, type} : Props) {
    return (
        <RectButton style={styles.container}>
            <Image source={type == "facebook" ? Facebook : Google} style={styles.image} />
            <Text style={styles.textContainer}>Continue com o {name}</Text>
        </RectButton>
    )
}
