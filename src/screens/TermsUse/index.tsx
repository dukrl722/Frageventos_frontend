import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './style';

import { Header } from '../../components/Header';

export function TermsUse() {

    return (
        <ScrollView style={styles.container}>
            <Header object='arrow-left' />
            <View style={styles.Viewtitle}>
                <Text style={styles.title}>
                    Termos de Uso
                </Text>
            </View>
            <View style={styles.ViewSubtitle}>
                <Text style={styles.Subtitle}>
                    Colocar os termos
                </Text>
            </View>
        </ScrollView>
    );
}
