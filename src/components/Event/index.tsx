import React from 'react';

import { ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <RectButton onPress={() =>                     
                            navigation.navigate('EventInfo', {
                                paramKey: data,
                            })}>
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
