import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {styles} from './style';

import EventImage from '../../assets/backgroundEvent.png';

export type EventProps = {
    id: string;
    name: string;
    image: string;
}

type Props = {
    data: EventProps;
}

export function Event({data}: Props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={EventImage} style={styles.imageContainer}>
                <Text style={styles.textContainer}>{data.name}</Text>
            </ImageBackground>
        </View>
    )
}
