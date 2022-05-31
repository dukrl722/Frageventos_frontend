import React from 'react';

import { Background } from "../../components/Background";
import { Filter } from '../../components/Filter';
import { EventCreated } from "../../components/EventCreated";
import { View } from 'react-native';
import { styles } from './style';
import { HeaderMenu } from '../../components/HeaderMenu';

export function EventsCreated() {
    return (
        <Background>
            <HeaderMenu/>
            <View style={styles.viewContent}>
                <Filter />
                <EventCreated />
            </View>
        </Background>
    );
}
