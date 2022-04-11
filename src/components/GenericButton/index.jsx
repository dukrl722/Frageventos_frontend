import React from 'react';
import { Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";

import { styles } from './style';

export function GenericButton(name) {
    return (
        <RectButton style={styles.container}>
            <Text style={styles.textContainer}>{name}</Text>
        </RectButton>
    )
}
