import React, { useState } from 'react';

import { Background } from "../../components/Background";
import { Filter } from '../../components/Filter';
import { EventCreated } from "../../components/EventCreated";
import { events } from '../../utils/Events';
import { View } from 'react-native';
import { styles } from './style';
import { HeaderMenu } from '../../components/HeaderMenu';
import { FlatList } from 'react-native-gesture-handler';

export function EventsCreated() {
    return (
        <Background>
            <HeaderMenu/>
            <View style={styles.viewContent}>
                <Filter />
                <FlatList style={styles.FlatList} keyExtractor={item => item.id} data={events} renderItem={({item}) => (
                    <EventCreated 
                    data={item}
                    />
                )}/>
            </View>
        </Background>
    );
}
