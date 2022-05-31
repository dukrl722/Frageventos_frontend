import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { styles } from './style';
import { EvilIcons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { events } from '../../utils/Events';
import { theme } from '../../global/styles/theme';

export function EventCreated() {
    return (
        <ScrollView style={styles.container}>
            {
                events.map((request, i) => (
                    <RectButton key={i}>
                        <ImageBackground source={request.image} style={[styles.imageContainer, request.day < 5 ?
                            { opacity: 0.4 } : { opacity: 1 }]}>
                            {request.day < 5 ?
                                <View style={styles.expirado}>
                                    <EvilIcons name="pencil" size={28} color={theme.colors.white} />
                                    <Text>
                                        Expirado
                                    </Text>
                                </View>
                                :
                                <RectButton style={styles.pencil}>
                                    <EvilIcons name="refresh" size={28} color={theme.colors.white} />
                                    <Text>
                                        Editar
                                    </Text>
                                </RectButton>
                            }
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
