import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView, FlatList} from 'react-native';

import {useNavigation} from "@react-navigation/native";

import {styles} from './style';

import {Header} from "../../components/Header";
import {Filter} from '../../components/Filter';
import {Background} from "../../components/Background";
import {Category} from '../../components/Category';

export function Categories() {

    const data = [
        {
            id: '1',
            name: 'Show ao Vivo',
            image: '',
        },
        {
            id: '2',
            name: 'Balada',
            image: '',
        },
        {
            id: '3',
            name: 'Privado',
            image: '',
        },
        {
            id: '4',
            name: 'Cultural',
            image: '',
        },
        {
            id: '5',
            name: 'Político',
            image: '',
        },
        {
            id: '6',
            name: 'Esportivo',
            image: '',
        }
    ]

    return (
        <Background>
            <Header/>
            <Filter/>
            <FlatList keyExtractor={item => item.id} data={data} renderItem={({item}) => (
                <Category data={item}/>
            )}/>
        </Background>
    );
}
