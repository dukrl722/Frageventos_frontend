import React from 'react';
import {Image, Text, View} from 'react-native';

import Lupa from '../../assets/lupa.png';

import { styles } from './style';

export function Filter() {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>Buscar Eventos</Text>
            <Image source={Lupa} style={styles.imageContainer} />
        </View>
    )
}
