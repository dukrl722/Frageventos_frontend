import React from 'react';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Filter } from '../../components/Filter';
import { Event } from "../../components/Event";
import { View } from 'react-native';
import { styles } from './style';

export function Events() {
    return (
        <Background>
            <Header object='menu' />
            <View style={styles.viewContent}>
                <Filter />
                <Event />
            </View>
        </Background>
    );
}
