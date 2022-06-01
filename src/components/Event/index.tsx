import React from 'react';

import { ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './style';

export type EventProps = {
    id: string;
    name: string;
    image: string;
    day: string;
    month: string;
}

type Props = {
    data: EventProps;
}

export function Event({ data }: Props) {
    return (
        <View style={styles.container}>
            <RectButton >
                <ImageBackground source={data.image} style={styles.imageContainer}>
                    
                    <View style={styles.date}>
                        <Text style={styles.dateDay}>
                            {data.day}
                        </Text>
                        <Text style={styles.dateMonth}>
                            {data.month}
                        </Text>
                    </View>
                    <Text style={styles.textContainer}>{data.name}</Text>
                </ImageBackground>
            </RectButton>
        </View>

    )
}
