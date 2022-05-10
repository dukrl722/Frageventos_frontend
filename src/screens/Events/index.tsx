import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, FlatList } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { styles } from './style';

import { Header } from "../../components/Header";
import { Filter } from '../../components/Filter';
import { Background } from "../../components/Background";
import { Event } from "../../components/Event";
import { events } from '../../utils/Events';

export function Events() {
    return (
        <Background>
            <Header />
            <View style={styles.viewContent}>
                <Filter />
                <Event />
            </View>
        </Background>
    );
}
