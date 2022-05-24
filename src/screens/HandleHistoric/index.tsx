import React, { useState, useEffect } from 'react';
import Background from '../../assets/background.png';
import Logo from '../../assets/splash.png';

import { View, Text, ImageBackground, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { theme } from '../../global/styles/theme';
import { historic } from '../../utils/Historic';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { Filter } from '../../components/Filter';
import { Historic } from '../../components/Historic';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export function HandleHistoric() {
    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.container} source={Background}>
            <View style={styles.cabecalho}>
                <Feather
                    name={'arrow-left'}
                    color={theme.colors.black}
                    size={25}
                    onPress={navigation.goBack}
                    style={styles.arrow}
                />
                <Image source={Logo} style={styles.imageContainer} />
            </View>
            <View style={styles.Title}>
                <MaterialCommunityIcons
                    name="calendar-clock"
                    size={24}
                    color={theme.colors.white}
                />
                <Text style={styles.SubTitle}>
                    Historico de eventos
                </Text>
            </View>
            <View style={styles.viewContent}>
                <Filter />
                <View>
                    <FlatList  style={styles.flatList} keyExtractor={item => item.id} data={historic} renderItem={({ item }) => (
                        <Historic data={item} />
                    )} />
                </View>
            </View>
        </ImageBackground>
    );
}