import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView, FlatList} from 'react-native';

import {useNavigation} from "@react-navigation/native";

import {styles} from './style';

import {Header} from "../../components/Header";
import {Filter} from '../../components/Filter';
import {Background} from "../../components/Background";
import {Event} from "../../components/Event";

export function Events() {

    const data = [
        {
            id: '1',
            name: 'Chaplin',
            image: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
        },
        {
            id: '2',
            name: 'Soberanos Burguer',
            image: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
        },
        {
            id: '3',
            name: 'Zazen Gastrobar',
            image: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
        },
        {
            id: '4',
            name: 'Officina Pub',
            image: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
        },
        {
            id: '5',
            name: 'Churrascaria Querencia',
            image: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
        }
    ]

    return (
        <Background>
            <Header/>
            <View style={styles.viewContent}>
                <Filter/>
                <FlatList keyExtractor={item => item.id} data={data} renderItem={({item}) => (
                    <Event data={item} />
                )}/>
            </View>
        </Background>
    );
}
