import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import { styles } from './style';

import EventImage from '../../assets/backgroundEvent.png';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { events } from '../../utils/Events';

export function Event() {
    return (
        <ScrollView style={styles.container}>
            {
                events.map((request, i) => (
                    <RectButton key={i}>
                        <ImageBackground source={request.image} style={styles.imageContainer}>
                            <View style={styles.date}>
                                <Text style={styles.dateDay}>
                                    {request.day}
                                </Text>
                                <Text style={styles.dateMonth}>
                                    {request.month}
                                </Text>
                            </View>
                            <Text style={styles.textContainer}>{request.name}</Text>
                        </ImageBackground>
                    </RectButton>
                ))
            }
        </ScrollView>
    )
}
