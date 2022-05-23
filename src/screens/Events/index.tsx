import React from 'react';

import { Background } from "../../components/Background";
import { Filter } from '../../components/Filter';
import { Event } from "../../components/Event";
import { View } from 'react-native';
import { styles } from './style';
import { HeaderMenu } from '../../components/HeaderMenu';

export function Events() {
    return (
        <Background>
            <HeaderMenu/>
            <View style={styles.viewContent}>
                <Filter />
                <Event />
            </View>
        </Background>
    );
}
