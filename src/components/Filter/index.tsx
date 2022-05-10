import React from 'react';

import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { theme } from '../../global/styles/theme';

export function Filter() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput placeholder="Buscar Eventos" placeholderTextColor={theme.colors.white} />
            </View>
            <Feather name="search" size={24} color={theme.colors.white} />
        </View>
    )
}
