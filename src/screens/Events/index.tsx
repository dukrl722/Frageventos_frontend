import React from 'react';

import { Background } from "../../components/Background";
import { HeaderMenu } from '../../components/HeaderMenu';
import { FlatList } from 'react-native-gesture-handler';
import { Filter } from '../../components/Filter';
import { Event } from "../../components/Event";
import { events } from '../../utils/Events';
import { View } from 'react-native';
import { styles } from './style';

export function Events() {
    return (
        <Background>
            <HeaderMenu/>
            <View style={styles.viewContent}>
                <Filter />
                <FlatList style={styles.FlatList} keyExtractor={item => item.id} data={events} renderItem={({item}) => (
                    <Event data={item} />
                )}/>
            </View>
        </Background>
    );
}
