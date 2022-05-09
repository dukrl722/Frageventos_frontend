import React from 'react';

import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';

export function Filter() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput placeholder="Buscar Eventos" placeholderTextColor={'white'} />
            </View>
            <Feather name="search" size={24} color="white" />
        </View>
    )
}
